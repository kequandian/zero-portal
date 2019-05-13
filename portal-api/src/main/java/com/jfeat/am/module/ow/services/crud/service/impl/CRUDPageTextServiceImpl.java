package com.jfeat.am.module.ow.services.crud.service.impl;
            
import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.jfeat.am.common.crud.FIELD;
import com.jfeat.am.module.ow.services.persistence.model.PageText;
import com.jfeat.am.module.ow.services.persistence.dao.PageTextMapper;


import com.jfeat.am.module.ow.services.crud.service.CRUDPageTextService;
import com.jfeat.am.common.crud.impl.CRUDServiceOnlyImpl;
import org.springframework.stereotype.Service;
import com.jfeat.am.common.exception.BusinessCode;
import javax.annotation.Resource;
import com.jfeat.am.common.crud.impl.CRUDServiceOnlyImpl;

/**
 * <p>
 *  implementation
 * </p>
 *CRUDPageTextService
 * @author Code Generator
 * @since 2018-11-29
 */

@Service
public class CRUDPageTextServiceImpl  extends CRUDServiceOnlyImpl<PageText> implements CRUDPageTextService {





        @Resource
        private PageTextMapper pageTextMapper;

        @Override
        protected BaseMapper<PageText> getMasterMapper() {
                return pageTextMapper;
        }







}


