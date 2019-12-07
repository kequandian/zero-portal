package com.jfeat.am.module.ow.services.domain.service.impl;

import com.jfeat.am.module.ow.services.domain.service.MenuService;

import com.jfeat.am.module.ow.services.crud.service.impl.CRUDMenuServiceImpl;
import com.jfeat.crud.base.request.Ids;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import com.jfeat.am.module.ow.services.persistence.dao.MenuMapper;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author admin
 * @since 2017-10-16
 */
@Service
public class MenuServiceImpl extends CRUDMenuServiceImpl implements MenuService {
    @Resource
    private MenuMapper menuMapper;

    @Override
    public Integer bulkDelete(Ids ids) {
        Integer success = 0;
        for (Long id : ids.getIds()) {
            success += menuMapper.deleteById(id);
        }
        return success;
    }
}
