package com.jfeat.am.module.ow.services.definite;

/**
 * Created by zy on 2018/11/28.
 */
public enum PageType {
    HTML("html"), RTF("rtf"), FOOTER("footer");
    private String type;
    PageType(String type) {
        this.type = type;
    }
    @Override
    public String toString() {
        return this.type;
    }
}
