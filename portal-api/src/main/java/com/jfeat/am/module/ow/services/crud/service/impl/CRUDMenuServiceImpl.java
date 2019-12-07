package com.jfeat.am.module.ow.services.crud.service.impl;
            
import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.jfeat.am.module.ow.services.persistence.model.Menu;
import com.jfeat.am.module.ow.services.persistence.dao.MenuMapper;


import com.jfeat.am.module.ow.services.crud.service.CRUDMenuService;
import com.jfeat.crud.plus.impl.CRUDServiceGroupImpl;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;

/**
 * <p>
 *  implementation
 * </p>
 *CRUDMenuService
 * @author Code Generator
 * @since 2018-11-28
 */

@Service
public class CRUDMenuServiceImpl  extends CRUDServiceGroupImpl<Menu> implements CRUDMenuService {






        @Resource
        private MenuMapper menuMapper;

        @Override
        protected BaseMapper<Menu> getGroupMapper() {
                return menuMapper;
        }






}


