package com.jfeat.am.module.ow.services.domain.service.impl;

import com.jfeat.am.module.ow.services.domain.service.PageTextService;

import com.jfeat.am.module.ow.services.crud.service.impl.CRUDPageTextServiceImpl;
import org.springframework.stereotype.Service;
import com.jfeat.am.common.constant.tips.Ids;
import javax.annotation.Resource;
import com.jfeat.am.module.ow.services.persistence.dao.PageTextMapper;
/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author admin
 * @since 2017-10-16
 */
@Service
public class PageTextServiceImpl extends CRUDPageTextServiceImpl implements PageTextService {
                                @Resource
    private PageTextMapper pageTextMapper;

    @Override
    public Integer bulkDelete(Ids ids){
        Integer success = 0;
        for(Long id:ids.getIds()){
            success += pageTextMapper.deleteById(id);
        }
        return success;
    }
}
