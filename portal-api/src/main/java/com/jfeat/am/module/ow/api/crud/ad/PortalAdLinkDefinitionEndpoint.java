package com.jfeat.am.module.ow.api.crud.ad;

import com.jfeat.am.module.advertisement.services.persistence.model.AdLinkDefinition;
import com.jfeat.am.module.advertisement.services.service.AdLinkDefinitionService;
import com.jfeat.crud.base.tips.SuccessTip;
import com.jfeat.crud.base.tips.Tip;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author admin
 * @since 2017-09-20
 */
@RestController
@RequestMapping("/api/banner/definition")
public class PortalAdLinkDefinitionEndpoint  {

    @Resource
    private AdLinkDefinitionService adLinkDefinitionService;

    @GetMapping
    public Tip listAdLinkDefinition() {
        return SuccessTip.create(adLinkDefinitionService.retrieveMasterList());
    }

    @GetMapping("/{id}")
    public Tip getAdLinkDefinition(@PathVariable Long id) {
        return SuccessTip.create(adLinkDefinitionService.retrieveMaster(id));
    }

    @PostMapping
    public Tip createAdLinkDefinition(@RequestBody AdLinkDefinition entity) {
        return SuccessTip.create(adLinkDefinitionService.createMaster(entity));
    }

    @PutMapping("/{id}")
    public Tip updateAdLinkDefinition(@PathVariable Long id, @RequestBody AdLinkDefinition entity) {
        return SuccessTip.create(adLinkDefinitionService.updateMaster(entity));
    }

    @DeleteMapping("/{id}")
    public Tip deleteAdLinkDefinition(@PathVariable Long id) {
        return SuccessTip.create(adLinkDefinitionService.deleteMaster(id));
    }
}
