package com.jfeat.am.module.ow.services.domain.service;

import com.jfeat.am.module.ow.services.crud.service.CRUDMenuService;
import com.jfeat.crud.base.request.Ids;

/**
 * Created by vincent on 2017/10/19.
 */
public interface MenuService extends CRUDMenuService{
        Integer bulkDelete(Ids ids);
}