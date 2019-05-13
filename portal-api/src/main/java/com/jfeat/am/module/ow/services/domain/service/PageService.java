package com.jfeat.am.module.ow.services.domain.service;

import com.jfeat.am.module.ow.services.crud.service.CRUDPageService;
import com.jfeat.am.common.constant.tips.Ids;
import com.jfeat.am.module.ow.services.domain.model.record.PageRecord;
import com.jfeat.am.module.ow.services.domain.request.ElementRequest;

/**
 * Created by vincent on 2017/10/19.
 */
public interface PageService extends CRUDPageService{
        Integer bulkDelete(Ids ids);
        Integer delete(Long id);
        Integer addPage(PageRecord record);
        Integer addElement(ElementRequest request);

        /**
         * 更新成分党
         * @param id  菜单id
         * @param request
         * @return Integer
         **/
        Integer updateElement(Long id, ElementRequest request);
        Integer updatePage(Long id, PageRecord entity);
        Integer insertByIdentifier(String identifier, PageRecord pageRecord);
        Integer updateByIdentifier(String identifier, PageRecord pageRecord);
}