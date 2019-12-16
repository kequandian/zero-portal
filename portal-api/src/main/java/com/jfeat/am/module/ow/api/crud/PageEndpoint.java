package com.jfeat.am.module.ow.api.crud;

import com.jfeat.am.common.annotation.Permission;
import com.jfeat.am.module.log.annotation.BusinessLog;
import com.jfeat.am.module.ow.api.permission.PagePermission;
import com.jfeat.am.module.ow.services.domain.dao.QueryPageDao;
import com.jfeat.am.module.ow.services.domain.model.record.PageRecord;
import com.jfeat.am.module.ow.services.domain.service.PageService;
import com.jfeat.am.module.ow.services.persistence.dao.PageMapper;
import com.jfeat.am.module.ow.services.persistence.model.Page;
import com.jfeat.crud.base.exception.BusinessCode;
import com.jfeat.crud.base.tips.ErrorTip;
import com.jfeat.crud.base.tips.SuccessTip;
import com.jfeat.crud.base.tips.Tip;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;


/**
 * <p>
 * ad
 * </p>
 *
 * @author Code Generator
 * @since 2018-11-28
 */
@RestController
@Api("MUASKIN官网api")
@RequestMapping("/api/ow/pages")
public class PageEndpoint  {

    @Resource
    private PageService pageService;

    @Resource
    private QueryPageDao queryPageDao;
    @Resource
    private PageMapper pageMapper;

    @BusinessLog(name = "网站页面", value = "新增网站页面")
    @ApiOperation("新增网站页面")
    @PostMapping
    public Tip createPage(@RequestBody PageRecord entity) {
        return SuccessTip.create(pageService.addPage(entity));
    }

    @BusinessLog(name = "网站页面", value = "新增网站页面")
    @PostMapping("/one/{identifier}")
    public Tip createPageById(@PathVariable String identifier, @RequestBody PageRecord pageRecord) {
        return SuccessTip.create(pageService.insertByIdentifier(identifier, pageRecord));
    }

    @Permission(PagePermission.PAGE_EDIT)
    @BusinessLog(name = "网站页面", value = "修改网站页面")
    @PutMapping("/one/{identifier}")
    public Tip updatePageById(@PathVariable String identifier, @RequestBody PageRecord pageRecord) {
        return SuccessTip.create(pageService.updateByIdentifier(identifier, pageRecord));
    }

    @Permission(PagePermission.PAGE_EDIT)
    @BusinessLog(name = "网站页面", value = "根据id 修改网站页面")
    @ApiOperation("更新页面")
    @PutMapping("/{id}")
    public Tip updatePage(@PathVariable Long id, @RequestBody PageRecord entity) {
        return SuccessTip.create(pageService.updatePage(id, entity));
    }

    @BusinessLog(name = "网站页面", value = "删除网站页面")
    @DeleteMapping("/{id}")
    @ApiOperation("删除页面")
    public Tip deletePage(@PathVariable Long id) {

        Page record = pageMapper.selectById(id);
        if(record != null && record.getConstant() == 1) {
            return ErrorTip.create(BusinessCode.BadRequest);
        }
        return SuccessTip.create(pageService.delete(id));
    }

}
