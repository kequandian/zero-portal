package com.jfeat.am.module.ow.api.crud;

import com.jfeat.am.common.constant.tips.ErrorTip;
import com.jfeat.am.common.constant.tips.SuccessTip;
import com.jfeat.am.common.constant.tips.Tip;
import com.jfeat.am.common.controller.BaseController;
import com.jfeat.am.common.exception.BusinessCode;
import com.jfeat.am.module.log.annotation.BusinessLog;
import com.jfeat.am.module.ow.services.domain.dao.QueryPageDao;
import com.jfeat.am.module.ow.services.domain.model.record.PageRecord;
import com.jfeat.am.module.ow.services.domain.service.PageService;
import com.jfeat.am.module.ow.services.persistence.dao.PageMapper;
import com.jfeat.am.module.ow.services.persistence.model.Page;
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
public class PageEndpoint extends BaseController {

    @Resource
    private PageService pageService;

    @Resource
    private QueryPageDao queryPageDao;
    @Resource
    private PageMapper pageMapper;

    @BusinessLog(name = "Page", value = "create Page")
    @ApiOperation("新增页面")
    @PostMapping
    public Tip createPage(@RequestBody PageRecord entity) {
        return SuccessTip.create(pageService.addPage(entity));
    }

    @PostMapping("/one/{identifier}")
    public Tip createPageById(@PathVariable String identifier, @RequestBody PageRecord pageRecord) {
        return SuccessTip.create(pageService.insertByIdentifier(identifier, pageRecord));
    }

    @PutMapping("/one/{identifier}")
    public Tip updatePageById(@PathVariable String identifier, @RequestBody PageRecord pageRecord) {
        return SuccessTip.create(pageService.updateByIdentifier(identifier, pageRecord));
    }

    @BusinessLog(name = "Page", value = "update Page")
    @ApiOperation("更新页面")
    @PutMapping("/{id}")
    public Tip updatePage(@PathVariable Long id, @RequestBody PageRecord entity) {
        return SuccessTip.create(pageService.updatePage(id, entity));
    }

    @BusinessLog(name = "Page", value = "delete Page")
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
