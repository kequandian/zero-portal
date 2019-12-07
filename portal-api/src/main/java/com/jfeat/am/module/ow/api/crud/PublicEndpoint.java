package com.jfeat.am.module.ow.api.crud;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.jfeat.am.module.ow.services.definite.RootMenu;
import com.jfeat.am.module.ow.services.domain.dao.QueryMenuDao;
import com.jfeat.am.module.ow.services.domain.dao.QueryPageDao;
import com.jfeat.am.module.ow.services.domain.dao.QueryPageTextDao;
import com.jfeat.am.module.ow.services.domain.model.record.MenuRecord;
import com.jfeat.am.module.ow.services.domain.model.record.PageRecord;
import com.jfeat.am.module.ow.services.domain.model.record.PageTextRecord;
import com.jfeat.am.module.ow.services.domain.service.MenuService;
import com.jfeat.am.module.ow.services.domain.service.PageService;
import com.jfeat.am.module.ow.services.domain.service.PageTextService;
import com.jfeat.am.module.ow.services.persistence.dao.MenuMapper;
import com.jfeat.am.module.ow.services.persistence.dao.PageMapper;
import com.jfeat.am.module.ow.services.persistence.dao.PageTextMapper;
import com.jfeat.am.module.ow.services.persistence.model.Menu;
import com.jfeat.am.module.ow.services.persistence.model.Page;
import com.jfeat.crud.base.tips.SuccessTip;
import com.jfeat.crud.base.tips.Tip;
import com.jfeat.crud.plus.CRUD;
import com.jfeat.images.services.domain.service.StockImagesService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by zy on 2018/11/30.
 */
@RestController
@Api("MUASKIN官网api")
@RequestMapping("/api/pub/ow")
public class PublicEndpoint {
    @Resource
    private PageService pageService;
    @Resource
    private QueryPageDao queryPageDao;
    @Resource
    private PageMapper pageMapper;
    @Resource
    QueryPageTextDao queryPageTextDao;
    @Resource
    PageTextService pageTextService;
    @Resource
    PageTextMapper pageTextMapper;
    @Resource
    MenuService menuService;
    @Resource
    MenuMapper menuMapper;
    @Resource
    QueryMenuDao queryMenuDao;
    @Resource
    StockImagesService stockImagesService;

    @ApiOperation("根据identifier获取页面详情")
    @GetMapping("/pages/one/{identifier}")
    public Tip getPageByIdentifier(@PathVariable String identifier) {
        Page page = new Page();
        page.setIdentifier(identifier);
        Page query = pageMapper.selectOne(page);
        PageRecord result = null;
        if(query != null) {
            result = CRUD.castObject(query, PageRecord.class);
            buildPage(query.getId(), result);
        }
        return SuccessTip.create(result);
    }

    @GetMapping("/pages/{id}")
    @ApiOperation("获取页面详情")
    public Tip getPage(@PathVariable Long id) {
        Page page = pageService.retrieveMaster(id);
        if(page == null) {
            return SuccessTip.create();
        }
        PageRecord record = CRUD.castObject(page, PageRecord.class);

        buildPage(id, record);
        return SuccessTip.create(record);
    }

    @GetMapping("/menus/by_page/{id}")
    @ApiOperation("获取页面下的菜单列表")
    public Tip getMenuItems(@PathVariable("id") Long id) {
        return SuccessTip.create(menuMapper.selectList(new EntityWrapper<Menu>().eq(Menu.PAGE_ID, id)));
    }

    @ApiOperation("成分党分页列表")
    @GetMapping("/elements")
    public Tip queryMenuPage(com.baomidou.mybatisplus.plugins.Page<MenuRecord> page,
                         @RequestParam(name = "current", required = false, defaultValue = "1") Integer pageNum,
                         @RequestParam(name = "pageSize", required = false, defaultValue = "10") Integer pageSize,
                         @RequestParam(name = "name", required = false) String name,
                         @RequestParam(name = "constant", required = false) Integer constant,
                         @RequestParam(name = "display", required = false) Integer display,
                         @RequestParam(name = "pageId", required = false) Long page_id,
                         @RequestParam(name = "id", required = false) Long id
    ) {
        Menu menu = new Menu();
        menu.setIdentifier(RootMenu.ELEMENT.toString());
        Menu result = menuMapper.selectOne(menu);
        page.setCurrent(pageNum);
        page.setSize(pageSize);
        MenuRecord record = new MenuRecord();
        record.setName(name);
        record.setConstant(constant);
        record.setDisplay(display);
        record.setPageId(page_id);
        record.setId(id);
        if(result != null) {
            record.setPid(result.getId());
        } else {
            record.setId(-1l);
        }
        page.setRecords(queryMenuDao.findMenuPage(page, record));
        return SuccessTip.create(page);
    }


    @ApiOperation("页面列表")
    @GetMapping("/pages")
    public Tip queryPage(com.baomidou.mybatisplus.plugins.Page<PageRecord> page,
                              @RequestParam(name = "current", required = false, defaultValue = "1") Integer pageNum,
                              @RequestParam(name = "pageSize", required = false, defaultValue = "10") Integer pageSize,
                              @RequestParam(name = "name", required = false) String name,
                              @RequestParam(name = "type", required = false) String type,
                              @RequestParam(name = "url", required = false) String url) {
        page.setCurrent(pageNum);
        page.setSize(pageSize);

        PageRecord record = new PageRecord();
        record.setName(name);
        record.setType(type);
        record.setUrl(url);
        page.setRecords(queryPageDao.findPagePage(page, record));
        return SuccessTip.create(page);
    }


    @GetMapping("/texts/{id}")
    @ApiOperation("富文本详情")
    public Tip getPageText(@PathVariable Long id) {
        return SuccessTip.create(pageTextService.retrieveMaster(id));
    }


    @GetMapping("/menus/{id}")
    @ApiOperation("获取菜单项及其下挂的子菜单")
    public Tip getMenu(@PathVariable Long id,
                       @RequestParam(name = "constant", required = false) String constant,
                       @RequestParam(name = "display", required = false) String display
                       ) {
        Menu menu = menuService.retrieveGroup(id);
        if(menu == null) {
            return SuccessTip.create(null);
        }
        MenuRecord record = CRUD.castObject(menu, MenuRecord.class);
        record.setItems(record.getItems() == null ? new ArrayList<Menu>() : record.getItems());
        Stream<Menu> menuStream = record.getItems().stream();
        if(constant != null && constant != ""){
            menuStream.filter(item -> Integer.valueOf(1).equals(item.getConstant()));
        }
        if(display != null && display != "") {
            menuStream.filter(item -> Integer.valueOf(1).equals(item.getDisplay()));
        }
        record.setItems(menuStream.collect(Collectors.toList()));
        return SuccessTip.create(initMenu(record));
    }

    @GetMapping("/menus")
    @ApiOperation("查询所有的菜单项及其下挂的子菜单")
    public Tip queryMenus(@RequestParam(name = "display", required = false) Integer display) {
        List<Menu> rootMenus = menuService.getRootGroups();
        List<MenuRecord> result = new ArrayList<>();
        for(Menu rootMenu : rootMenus) {
            result.add(initMenu(rootMenu));
        }
        if(display != null) {
            result = result.stream().filter(item -> display.equals(item.getDisplay())).collect(Collectors.toList());
            for(MenuRecord menuRecord : result) {
                if(menuRecord.getItems() != null) {
                    List<Menu> temp = menuRecord.getItems().stream().filter(item -> display.equals(item.getDisplay())).collect(Collectors.toList());
                    menuRecord.setItems(temp);
                }
            }
        }
        return SuccessTip.create(result);
    }

    @GetMapping("/images/owner")
    public Tip findOwnerImages(@RequestParam("ownerId") Long ownerId, @RequestParam(value = "ownerType",required = false) String ownerType) {
        return SuccessTip.create(this.stockImagesService.findOwnerImages(ownerId, ownerType));
    }

    private MenuRecord initMenu(Menu menu) {
        MenuRecord record = CRUD.castObject(menu, MenuRecord.class);
        if(menu.getPageId() != null) {
            Page page = pageService.retrieveMaster(menu.getPageId());
            record.setUrl(page.getUrl());
        }
        if(record.getLowest() != 1) {
            record.setItems(new ArrayList<>());
            List<Menu> subMenus = menuService.getGroupChildren(record.getId());

            if(subMenus != null) {
                subMenus.forEach(item -> {
                    MenuRecord itemRecord = CRUD.castObject(item, MenuRecord.class);
                    record.getItems().add(itemRecord);
                    if(item.getPageId() != null) {
                        Page page = pageService.retrieveMaster(item.getPageId());
                        itemRecord.setUrl(page == null ? null : page.getUrl());
                    }
                });
            }
        }
        return record;
    }


    /**
     * @param pid   页面id
     * @param record
     * @return
     * @decription 填充页面数据: 文本内容，图片，轮播图
     **/
    private void buildPage(Long pid, PageRecord record) {
        record.setId(pid);
        PageTextRecord query = new PageTextRecord();
        query.setPageId(record.getId());
        PageTextRecord pageTextRecord = queryPageTextDao.selectOne(query);
        record.setContent(pageTextRecord == null ? null : pageTextRecord.getContent());
    }
}
