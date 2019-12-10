package com.jfeat.am.module.ow.services.crud.service.impl;
            
import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.jfeat.am.module.ow.services.crud.service.CRUDPageGroupService;
import com.jfeat.am.module.ow.services.persistence.dao.PageMapper;
import com.jfeat.am.module.ow.services.persistence.model.Page;
import com.jfeat.crud.plus.FIELD;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;
import com.jfeat.crud.base.exception.BusinessCode;
import com.jfeat.crud.base.exception.BusinessException;
import javax.annotation.Resource;
import com.jfeat.crud.plus.impl.CRUDServiceGroupImpl;

/**
 * <p>
 *  implementation
 * </p>
 *CRUDPageGroupService
 * @author Code Generator
 * @since 2019-12-10
 */

@Service
public class CRUDPageGroupServiceImpl  extends CRUDServiceGroupImpl<Page> implements CRUDPageGroupService {






        @Resource
        private PageMapper pageMapper;

        @Override
        protected BaseMapper<Page> getGroupMapper() {
                return pageMapper;
        }






}


