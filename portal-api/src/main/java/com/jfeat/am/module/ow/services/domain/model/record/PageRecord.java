package com.jfeat.am.module.ow.services.domain.model.record;

import com.baomidou.mybatisplus.annotations.TableName;
import com.jfeat.am.module.ow.services.persistence.model.Page;

/**
 * Created by Code Generator on 2018-11-28
 */
@TableName("ow_page")
public class PageRecord extends Page {
    private String content;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
