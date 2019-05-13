package com.jfeat.am.module.ow.services.domain.dao;

import com.jfeat.am.module.ow.services.domain.model.record.PageTextRecord;

import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

/**
 * Created by Code Generator on 2018-11-29
 */
public interface QueryPageTextDao extends BaseMapper<PageTextRecord> {
    List<PageTextRecord> findPageTextPage(Page<PageTextRecord> page, @Param("record") PageTextRecord record, @Param("orderBy") String orderBy);
}