package com.jfeat.am.module.ow.services.definite;

/**
 * Created by zy on 2018/12/1.
 * 一级菜单id定义
 */
public enum RootMenu {
    PORTAL(1L, 1L, "portal"),     //首页
    ABOUT(2L, 2L, "about"),     // 关于MUASKIN
    TRIAL(3L, 3L, "trial"),      // 体验中心
    PRODUCT(4L, 4L, "product"),    // 所有产品
    ELEMENT(5L, 5L, "element"),    // 成分党
    ACCOUNT(6L, 6L, "account"),    // 会员中心
    COURSE(7L, 7L, "course");     // 美丽课堂
    private Long id;
    private String type;
    private Long pageId;
    RootMenu(Long id, Long pageId, String type) {
        this.id = id;
        this.pageId = pageId;
        this.type = type;
    }
    public Long getId() {
        return this.id;
    }
    public Long getPageId() { return this.pageId; }
    @Override
    public String toString() {
        return this.type;
    }

    public static RootMenu byType(String type) {
        RootMenu result = null;
        if(RootMenu.PORTAL.toString().equals(type)) {
            result = PORTAL;
        } else if(RootMenu.PRODUCT.toString().equals(type)) {
            result = PRODUCT;
        } else if(RootMenu.ELEMENT.toString().equals(type)) {
            result = ELEMENT;
        }
        return result;
    }
}
