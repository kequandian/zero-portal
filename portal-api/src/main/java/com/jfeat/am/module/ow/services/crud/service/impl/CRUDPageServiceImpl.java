package com.jfeat.am.module.ow.services.crud.service.impl;
            
import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.jfeat.am.common.crud.impl.CRUDServiceOnlyImpl;
import com.jfeat.am.module.ow.services.crud.service.CRUDPageService;
import com.jfeat.am.module.ow.services.persistence.dao.PageMapper;
import com.jfeat.am.module.ow.services.persistence.model.Page;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * <p>
 *  implementation
 * </p>
 *CRUDPageService
 * @author Code Generator
 * @since 2018-11-28
 */

@Service
public class CRUDPageServiceImpl  extends CRUDServiceOnlyImpl<Page> implements CRUDPageService {


        @Resource
        private PageMapper pageMapper;

        @Override
        protected BaseMapper<Page> getMasterMapper() {
                return pageMapper;
        }







}


