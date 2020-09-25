function closeInfoDrawer(e) {
    e.getMap().getSelectionHandler().clearSelection();
    infoDrawer.close();
    //vesselInfoDrawer.close();
}

// Instantiating layer switcher

const zoomControl = Sintium.zoomControl();

const layerSwitcher = Sintium.sidebarLayerSwitcher({
    position: "left"
});

// Instantiating map
const map = Sintium.map({
    domId: "map",
    layers: [seaBottomInstallationsLayer, maritimeBordersLayer, fishRegulationsGroup, seismicGroup, iceGroup, tradeAreaGroup],
    use: [infoDrawer, layerSwitcher],
    controls: [zoomControl],
    zoomOnClusterClick: true,
    onClickEmptySpace: closeInfoDrawer,
    onClickCluster: closeInfoDrawer,
    hitTolerance: 4,
    rotation: false
});

function addToolsAndVesselsLayerToMap() {
    map.layer(toolsLayer);
    map.layer(vesselsLayer);
    map.use(vesselInfoDrawer);
}
