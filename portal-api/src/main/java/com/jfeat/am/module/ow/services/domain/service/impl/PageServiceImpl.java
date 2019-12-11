package com.jfeat.am.module.ow.services.domain.service.impl;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.toolkit.StringUtils;
import com.jfeat.am.module.ow.services.crud.service.impl.CRUDPageServiceImpl;
import com.jfeat.am.module.ow.services.definite.PageType;
import com.jfeat.am.module.ow.services.definite.RootMenu;
import com.jfeat.am.module.ow.services.domain.dao.QueryPageTextDao;
import com.jfeat.am.module.ow.services.domain.model.record.PageRecord;
import com.jfeat.am.module.ow.services.domain.model.record.PageTextRecord;
import com.jfeat.am.module.ow.services.domain.request.ElementRequest;
import com.jfeat.am.module.ow.services.domain.service.PageService;
import com.jfeat.am.module.ow.services.persistence.dao.MenuMapper;
import com.jfeat.am.module.ow.services.persistence.dao.PageMapper;
import com.jfeat.am.module.ow.services.persistence.dao.PageTextMapper;
import com.jfeat.am.module.ow.services.persistence.model.Menu;
import com.jfeat.am.module.ow.services.persistence.model.Page;
import com.jfeat.am.module.ow.services.persistence.model.PageText;
import com.jfeat.crud.base.request.Ids;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author admin
 * @since 2017-10-16
 */
@Service
public class PageServiceImpl extends CRUDPageServiceImpl implements PageService {
    @Resource
    private PageMapper pageMapper;

    @Resource
    private QueryPageTextDao queryPageTextDao;

    @Resource
    private PageTextMapper pageTextMapper;
    @Resource
    private MenuMapper menuMapper;

    @Override
    @Transactional
    public Integer bulkDelete(Ids ids) {
        Integer success = 0;
        for (Long id : ids.getIds()) {
            success += delete(id);
        }
        return success;
    }

    @Transactional
    public Integer  delete(Long id) {
        Integer affected = 0;
        affected += queryPageTextDao.delete(new EntityWrapper<PageTextRecord>().eq(PageTextRecord.PAGE_ID, id));
        affected += pageMapper.deleteById(id);
        return affected;
    }

    @Transactional
    public Integer addPage(PageRecord record) {
        Integer affected = 0;
        affected = pageMapper.insert(record);
        PageTextRecord pageTextRecord = new PageTextRecord();
        pageTextRecord.setPageId(record.getId());
        pageTextRecord.setContent(record.getContent());
        affected += queryPageTextDao.insert(pageTextRecord);
        return affected;
    }

    /**
     * 更新页面
     **/
    @Transactional
    public Integer updatePage(Long id, PageRecord entity) {
        Integer affected = 0;
        entity.setId(id);
        Page record = pageMapper.selectById(id);
        if(record != null && record.getConstant().equals(1)) { // 基础页面identifier 不可修改
            PageRecord pageTemp = new PageRecord();
            pageTemp.setId(entity.getId());
            pageTemp.setName(entity.getName());
            pageTemp.setContent(entity.getContent());
            entity = pageTemp;
        }
        affected += pageMapper.updateById(entity);
        if(affected != 0) {     // 页面存在

            PageText pageText = new PageText();
            pageText.setPageId(id);
            PageText queryPageText = pageTextMapper.selectOne(pageText);

            pageText.setContent(formatContent(entity.getContent()));
            if(queryPageText != null) {

                affected += pageTextMapper.update(pageText, new EntityWrapper<PageText>().eq(PageText.PAGE_ID, id));
            } else {
                affected += pageTextMapper.insert(pageText);
            }
        }
        return affected;
    }



    /**
     * 对富文本内容格式化
     * 1. 去除图片间的自动换段: <p></p>  OR <p style="text-align:center;"></p>
     *       <p style="text-align:center;"></p>     // x
 *          <div class="media-wrap image-wrap align-center" style="text-align:center">
     *          <img src="http://120.79.77.207:8080/images/null/36d01493-a467-4ef2-91b5-9ec9137f4e0a.png"/>
     *      </div>
     *      <p style="text-align:center;"></p>      // x
     **/

    private static boolean checkP(String[] arr, int index) {
        if(arr[index].equals("<p>")
                ||arr[index].equals("<p style=\"text-align:center;\">")
                || arr[index].equals("<p style=\"text-align:left;\">")
                || arr[index].equals("<p style=\"text-align:right;\">")
                || arr[index].equals("<p style=\"text-align:justify;\">")) {
            return true;
        }
        return false;
    }
    private static String formatContent(String content) {
        if(content == null || "".equals(content)) {
            return content;
        }
        String[] help = content.split("</p>");
        StringBuilder sb = new StringBuilder("");
        for(int i = 0; i < help.length; i++) {
            if(help.length == 1) {
                sb.append(help[0]);
                if(help.length == 1 && help[0].indexOf("<p") != -1) {
                    sb.append("</p>");
                }
                break;
            }
            if(i == 0) {
                continue;
            }


            if(help[i].startsWith("<div class=\"media-wrap image-wrap") && checkP(help, i - 1)) {
                // do nothing
            } else if(help[i - 1].endsWith("<p>")){
                sb.append(help[i - 1].substring(0, help[i - 1].length() - 3));
            } else if(help[i - 1].endsWith("<p style=\"text-align:center;\">")) {
                sb.append(help[i - 1].substring(0, help[i - 1].length() - 30));
            } else if(help[i - 1].endsWith("<p style=\"text-align:left;\">")) {
                sb.append(help[i - 1].substring(0, help[i - 1].length() - 28));
            } else if(help[i - 1].endsWith("<p style=\"text-align:right;\">")) {
                sb.append(help[i - 1].substring(0, help[i - 1].length() - 29));
            } else if(help[i - 1].endsWith("<p style=\"text-align:justify;\">")) {
                sb.append(help[i - 1].substring(0, help[i - 1].length() - 27));
            } else {
                sb.append(help[i - 1]).append("</p>");
            }
            if(i == help.length - 1) {
                if(!checkP(help, i)) {
                    sb.append(help[i].indexOf("<p") != -1 ? help[i] + "</p>" : help[i]);
                }
            }
        }
        return sb.toString();
    }

    /**
     * for test
     **/
    public static void main(String[] args) {
        String test = "<p style=\"text-align:center;\"></p><div class=\"media-wrap image-wrap align-center\" style=\"text-align:center\"><img src=\"http://120.79.77.207:8080/images/null/3a50ddab-cd99-48fc-ba89-16f4201444ba.png\"/></div><p></p><div class=\"media-wrap image-wrap align-center\" style=\"text-align:center\"><img src=\"http://120.79.77.207:8080/images/null/cad2cca2-cb70-4c2f-bbd5-4164bcf1f652.png\"/></div><p></p><div class=\"media-wrap image-wrap align-center\" style=\"text-align:center\"><img src=\"http://120.79.77.207:8080/images/null/2c7bf5df-c155-4652-b838-243cbc546f26.png\"/></div><p></p>";
//        String test = "<p>gg</p>";
        System.out.println(test);
        System.out.println(formatContent(test));
    }
    /**
     * 新增成分党
     **/
    @Transactional
    public Integer addElement(ElementRequest request) {
        Integer affected = 0;

        Page page = new Page();
        page.setType(PageType.RTF.toString());
        page.setName("成分党: " + request.getName());
        affected += pageMapper.insert(page);

        Menu menu = new Menu();
        menu.setPid(RootMenu.ELEMENT.getId());
        menu.setPageId(page.getId());
        menu.setSeq(request.getSeq());
        menu.setName(request.getName());
        menu.setCover(request.getCover());
        affected += menuMapper.insert(menu);

        PageText pageText = new PageText();
        pageText.setContent(request.getContent());
        pageText.setPageId(page.getId());
        affected += pageTextMapper.insert(pageText);
        return affected;
    }
    /**
     * 更新成分党
     * @param id  菜单id
     * @param request
     * @return Integer
     **/
    @Transactional
    public Integer updateElement(Long id, ElementRequest request) {
        Integer affected = 0;

        Page page = new Page();
        page.setId(id);
        page.setType(PageType.RTF.toString());
        page.setName("成分党: " + request.getName());
        affected += pageMapper.updateById(page);

        Menu menu = new Menu();
        menu.setPid(RootMenu.ELEMENT.getId());
        menu.setSeq(request.getSeq());
        menu.setName(request.getName());
        affected += menuMapper.update(menu, new EntityWrapper<Menu>().eq(Menu.PAGE_ID, id));

        if(!StringUtils.isEmpty(request.getContent())) {
            PageText pageText = new PageText();
            pageText.setContent(request.getContent());
            affected += pageTextMapper.update(pageText, new EntityWrapper<PageText>().eq(PageText.PAGE_ID, id));
        }
        return affected;
    }

    @Transactional
    @Override
    public Integer insertByIdentifier(String identifier, PageRecord pageRecord) {
        Integer affected = 0;
        pageRecord.setIdentifier(identifier);
        pageRecord.setType(pageRecord.getType() == null ? PageType.RTF.toString() : pageRecord.getType());
        affected += pageMapper.insert(pageRecord);

        PageText pageText = new PageText();
        pageText.setPageId(pageRecord.getId());
        pageText.setContent(pageRecord.getContent());
        affected += pageTextMapper.insert(pageText);
        return affected;
    }

    @Transactional
    @Override
    public Integer updateByIdentifier(String identifier, PageRecord pageRecord) {
        Integer affected = 0;
        Page pageQuery = new Page();
        pageQuery.setIdentifier(identifier);
        Page page = pageMapper.selectOne(pageQuery);
        if(page != null) {
            if(pageRecord.getUrl() != null || pageRecord.getName() != null) {
                pageRecord.setId(page.getId());
                affected += pageMapper.updateById(pageRecord);
            }


            if(pageRecord.getContent() != null) {
                PageText textVo = new PageText();
                textVo.setContent(pageRecord.getContent());
                List<PageText> pageText = pageTextMapper.selectList(new EntityWrapper<PageText>().eq(PageText.PAGE_ID, page.getId()));

                if(pageText!=null||pageText.size()>0){
                    //更新
                    affected += pageTextMapper.update(textVo, new EntityWrapper<PageText>().eq(PageText.PAGE_ID, page.getId()));
                }else{
                    //插入
                    affected += pageTextMapper.insert(textVo);
                }

            }
        }
        return affected;
    }
}
