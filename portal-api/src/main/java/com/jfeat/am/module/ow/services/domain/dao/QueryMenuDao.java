package com.jfeat.am.module.ow.services.domain.dao;

import com.jfeat.am.module.ow.services.domain.model.MenuModel;
import com.jfeat.am.module.ow.services.domain.model.record.MenuRecord;

import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.jfeat.am.module.ow.services.persistence.model.Menu;
import org.apache.ibatis.annotations.Param;
import java.util.List;

/**
 * Created by Code Generator on 2018-11-28
 */
public interface QueryMenuDao extends BaseMapper<Menu> {
    List<MenuRecord> findMenuPage(Page<MenuRecord> page, @Param("record") MenuRecord record);

    List<MenuRecord> queryMenu(@Param("record") MenuRecord record, @Param("status") List<String> status);

    MenuRecord selectMenuById(@Param("id") Long id);


}