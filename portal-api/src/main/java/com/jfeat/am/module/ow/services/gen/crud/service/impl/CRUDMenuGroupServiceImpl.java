package com.jfeat.am.module.ow.services.gen.crud.service.impl;
            
import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.jfeat.am.module.ow.services.gen.crud.service.CRUDMenuGroupService;
import com.jfeat.am.module.ow.services.persistence.dao.MenuMapper;
import com.jfeat.am.module.ow.services.persistence.model.Menu;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import com.jfeat.crud.plus.impl.CRUDServiceGroupImpl;

/**
 * <p>
 *  implementation
 * </p>
 *CRUDMenuGroupService
 * @author Code Generator
 * @since 2019-12-10
 */

@Service
public class CRUDMenuGroupServiceImpl  extends CRUDServiceGroupImpl<Menu> implements CRUDMenuGroupService {

        @Resource
        private MenuMapper menuMapper;

        @Override
        protected BaseMapper<Menu> getGroupMapper() {
                return menuMapper;
        }






}


