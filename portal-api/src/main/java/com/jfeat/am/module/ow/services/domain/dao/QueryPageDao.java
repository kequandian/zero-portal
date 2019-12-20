package com.jfeat.am.module.ow.services.domain.dao;


import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.jfeat.am.module.ow.services.domain.model.record.PageRecord;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by Code Generator on 2018-11-28
 */
public interface QueryPageDao extends BaseMapper<PageRecord> {
    List<PageRecord> findPagePage(Page<PageRecord> page, @Param("record") PageRecord record ,
                                     @Param("search")   String search);
}