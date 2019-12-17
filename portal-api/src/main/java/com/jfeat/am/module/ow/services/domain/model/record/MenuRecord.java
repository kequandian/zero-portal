package com.jfeat.am.module.ow.services.domain.model.record;

import com.jfeat.am.module.ow.services.persistence.model.Menu;

import java.util.List;

/**
 * Created by Code Generator on 2018-11-28
 */
public class MenuRecord extends Menu{
    private String pageName;

    private List<Menu> items;
    private String url;

    public String getPageName() {
        return pageName;
    }

    public void setPageName(String pageName) {
        this.pageName = pageName;
    }

    public List<Menu> getItems() {
        return items;
    }

    public void setItems(List<Menu> items) {
        this.items = items;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
