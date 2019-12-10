package com.jfeat.am.module.ow.services.crud.service.impl;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.jfeat.am.module.ow.services.crud.service.CRUDGroupedPageService;
import com.jfeat.am.module.ow.services.persistence.dao.MenuMapper;
import com.jfeat.am.module.ow.services.persistence.dao.PageMapper;
import com.jfeat.am.module.ow.services.persistence.model.Menu;
import com.jfeat.am.module.ow.services.persistence.model.Page;
import com.jfeat.crud.plus.impl.CRUDServiceGroupByImpl;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;

@Service
public class CRUDGroupedPageServiceImpl extends CRUDServiceGroupByImpl<Page, Menu> implements CRUDGroupedPageService {

    @Resource
    PageMapper pageMapper;
    @Resource
    MenuMapper menuMapper;

    @Override
    protected BaseMapper<Page> getGroupMapper() {
        return pageMapper;
    }

    @Override
    protected BaseMapper<Menu> getGroupByMapper() {
        return menuMapper;
    }

    @Override
    protected String groupByFieldName() {
        return "page_id";
    }
}
