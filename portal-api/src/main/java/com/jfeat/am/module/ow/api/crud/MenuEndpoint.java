package com.jfeat.am.module.ow.api.crud;

import com.jfeat.am.module.log.annotation.BusinessLog;
import com.jfeat.am.module.ow.services.domain.dao.QueryMenuDao;
import com.jfeat.am.module.ow.services.domain.model.record.MenuRecord;
import com.jfeat.am.module.ow.services.domain.request.ElementRequest;
import com.jfeat.am.module.ow.services.domain.service.MenuService;
import com.jfeat.am.module.ow.services.domain.service.PageService;
import com.jfeat.am.module.ow.services.persistence.model.Menu;
import com.jfeat.crud.base.exception.BusinessCode;
import com.jfeat.crud.base.exception.BusinessException;
import com.jfeat.crud.base.tips.ErrorTip;
import com.jfeat.crud.base.tips.SuccessTip;
import com.jfeat.crud.base.tips.Tip;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;


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
@RequestMapping("/api/ow/menus")
public class MenuEndpoint  {
    @Resource
    MenuService menuService;

    @Resource
    QueryMenuDao queryMenuDao;

    @Resource
    PageService pageService;

    @BusinessLog(name = "Menu", value = "create Menu")
    @PostMapping
    @ApiOperation("新建菜单")
    public Tip createMenu(@RequestBody Menu entity) {
        Integer affected = 0;
        try {
            affected = menuService.createGroup(entity);
        } catch (DuplicateKeyException e) {
            throw new BusinessException(BusinessCode.DuplicateKey);
        }
        return SuccessTip.create(affected);
    }

    @BusinessLog(name = "Menu", value = "update Menu")
    @PutMapping("/{id}")
    @ApiOperation("更新菜单项")
    public Tip updateMenu(@PathVariable Long id, @RequestBody Menu entity) {
        entity.setId(id);
        Menu menu = menuService.retrieveGroup(id);
        if(menu != null && menu.getConstant() == 1) {
            menu.setName(entity.getName());
            menu.setNote(entity.getNote());
        }
        return SuccessTip.create(menuService.updateGroup(entity));
    }


    @BusinessLog(name = "Menu", value = "delete Menu")
    @ApiOperation("删除菜单项")
    @DeleteMapping("/{id}")
    public Tip deleteMenu(@PathVariable("id") Long id) {
        Menu menu = menuService.retrieveGroup(id);
        if(menu != null && menu.getConstant() == 1) {
            return ErrorTip.create(BusinessCode.BadRequest);
        }
        return SuccessTip.create(menuService.deleteGroup(id));
    }

    @GetMapping
    @ApiOperation("菜单[成分党]列表")
    public Tip queryMenu(@RequestParam(value = "status", required = false) List<String> status,
                         @RequestParam(value = "pid", required = false) Long pid,
                         @RequestParam(value = "id", required = false) Long id,
                         @RequestParam(value = "name", required = false) String name
                         ) {
        MenuRecord record = new MenuRecord();
        record.setName(name);
        record.setPid(pid);
        record.setId(id);
        return SuccessTip.create(queryMenuDao.queryMenu(record, status));
    }


    @BusinessLog(name = "Page", value = "create Page")
    @ApiOperation("新增成分党 [即菜单api的基础上加上content]")
    @PostMapping("/element")
    public Tip createElement(@RequestBody ElementRequest entity) {
        return SuccessTip.create(pageService.addElement(entity));
    }

    @BusinessLog(name = "Page", value = "create Page")
    @ApiOperation("更新成分党 [即菜单api的基础上加上content]")
    @PutMapping("/element/{id}")
    public Tip updateElement(@PathVariable Long id, @RequestBody ElementRequest entity) {
        return SuccessTip.create(pageService.updateElement(id, entity));
    }

    @PostMapping("/action/{id}/disable")
    @ApiOperation("菜单禁用")
    public Tip disable(@PathVariable Long id) {
        Menu menu = new Menu();
        menu.setId(id);
        menu.setDisplay(0);
        return SuccessTip.create(menuService.updateGroup(menu));
    }

    @PostMapping("/action/{id}/enable")
    @ApiOperation("菜单启用")
    public Tip enable(@PathVariable Long id) {
        Menu menu = new Menu();
        menu.setId(id);
        menu.setDisplay(1);
        return SuccessTip.create(menuService.updateGroup(menu));
    }
}
