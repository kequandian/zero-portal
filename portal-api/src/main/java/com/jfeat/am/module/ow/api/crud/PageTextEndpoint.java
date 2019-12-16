package com.jfeat.am.module.ow.api.crud;

import com.baomidou.mybatisplus.plugins.Page;
import com.jfeat.am.module.log.annotation.BusinessLog;
import com.jfeat.am.module.ow.services.domain.dao.QueryPageTextDao;
import com.jfeat.am.module.ow.services.domain.model.record.PageTextRecord;
import com.jfeat.am.module.ow.services.domain.service.PageTextService;
import com.jfeat.am.module.ow.services.persistence.model.PageText;
import com.jfeat.crud.base.exception.BusinessCode;
import com.jfeat.crud.base.exception.BusinessException;
import com.jfeat.crud.base.request.Ids;
import com.jfeat.crud.base.tips.SuccessTip;
import com.jfeat.crud.base.tips.Tip;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;


/**
 * <p>
 * ad
 * </p>
 *
 * @author Code Generator
 * @since 2018-11-29
 */
@RestController
@Api("MUASKIN官网api")
@RequestMapping("/api/ow/page/texts")
public class PageTextEndpoint {

    @Resource
    PageTextService pageTextService;

    @Resource
    QueryPageTextDao queryPageTextDao;

    @BusinessLog(name = "网站页面内容", value = "新建网站页面内容")
    @PostMapping
    public Tip createPageText(@RequestBody PageText entity) {

        Integer affected = 0;
        try {
            affected = pageTextService.createMaster(entity);

        } catch (DuplicateKeyException e) {
            throw new BusinessException(BusinessCode.DuplicateKey);
        }

        return SuccessTip.create(affected);
    }


    @BusinessLog(name = "网站页面内容", value = "更新网站页面内容")
    @PutMapping("/{id}")
    @ApiOperation("更新富文本")
    public Tip updatePageText(@PathVariable("id") Long id, @RequestBody PageText entity) {
        entity.setId(id);
        return SuccessTip.create(pageTextService.updateMaster(entity));
    }

    @BusinessLog(name = "网站页面内容", value = "删除网站页面内容")
    @DeleteMapping("/{id}")
    @ApiOperation("删除富文本")
    public Tip deletePageText(@PathVariable Long id) {
        return SuccessTip.create(pageTextService.deleteMaster(id));
    }

    @GetMapping
    @ApiOperation("富文本列表")
    public Tip queryPageTexts(Page<PageTextRecord> page,
                              @RequestParam(name = "current", required = false, defaultValue = "1") Integer pageNum,
                              @RequestParam(name = "pageSize", required = false, defaultValue = "10") Integer pageSize,
                              @RequestParam(name = "id", required = false) Long id,
                              @RequestParam(name = "pageId", required = false) Long pageId,
                              @RequestParam(name = "content", required = false) String content,
                              @RequestParam(name = "orderBy", required = false) String orderBy,
                              @RequestParam(name = "sort", required = false) String sort) {
        page.setCurrent(pageNum);
        page.setSize(pageSize);
        PageTextRecord record = new PageTextRecord();
        record.setId(id);
        record.setPageId(pageId);
        record.setContent(content);
        page.setRecords(queryPageTextDao.findPageTextPage(page, record, orderBy));
        return SuccessTip.create(page);
    }


    @PostMapping("/bulk/delete")
    @ApiOperation("批量删除富文本")
    public Tip deleteList(@RequestBody Ids ids) {
        return SuccessTip.create(pageTextService.bulkDelete(ids));
    }

}
