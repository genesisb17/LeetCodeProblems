var findSmallestRegion = function(regions, region1, region2) {


    let world = new Map(); // map of maps
    for(let region of regions){
       let parent = region[0];
       for(let i = 1; i < region.length; i++){
        world.set(region[i], parent)
       }
    }

    //path for region 1
    let path = new Set;

    while(region1){
        path.add(region1)
        region1 = world.get(region1)
    }


    while(region2){
        if(path.has(region2)) return region2
        region2 = world.get(region2)
    }

    return null;

};