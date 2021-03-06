
let emptyDirections = {n:"", s:"", w:"", e:""};

let interactionWords = {"get":["get ", "grab ", "pick up "],}

let woodsWalk = 
    {
        "location":{
            "North-Woods-Entrance":
            {"exits":
            {"n":"North-Woods-Path-A", "s":"Plains-X", "w":"none", "e":"none"},
            "descriptions":
            {"light":"The path into the woods is well lit by sun from the plains to the south. Large redwoods and a variety of other trees competing for the leftover scraps of sunlight seem to stretch infinitely to either side, but the path to the north is clear. It's almost as if a diving line exists that keeps the plains on one side and the forest on the other.", "dark":"You can just make out the way forward between the dense growth of trees with the faint glow of moonlight filtering dimly into the forest entrance."},
            "items":
            {"flower":"here", "branch":"here"}
            },
            "North-Woods-Path-A":{"exits":
            {"n":"North-Woods-Path-B", "s":"North-Woods-Entrance", "w":"none", "e":"none"},
            "descriptions":
            {"light":"The interior of the forest is shady, but well lit with dappled sunshine falling through the canopy. Birds call out to each other, unseen in the high tree-tops. You see the path stretching north before you.", "dark":"It's almost pitch-black inside the wood, but you can just make out the path in front of you. The forest rustles around you in the night breeze, and the soft call of an owl floats in from far away."},
            "items":
            {"branch":"here", "mushroom":"here"}
            },
            "North-Woods-Path-B":{"exits":
            {"n":"Empty-Grotto", "s":"North-Woods-Path-A", "w":"none", "e":"none"},
            "descriptions":
            {"light":"The interior of the forest is shady, but well lit with dappled sunshine falling through the canopy. Birds call out to each other, unseen in the high tree-tops. North of you, you can see a brighter patch of light.", "dark":"It's almost pitch-black inside the wood, but you can just make out the path in front of you. There seems to be a patch of moonlight to the north. Do the night noises of the forest seem quieter here?"},
            },
            "Empty-Grotto":{"exits":
            {"n":"none", "s":"North-Woods-Path-B", "w":"none", "e":"none"},
            "descriptions":
            {"light":"Sunlight streams down in this small clearing. The trees tower around the edges, but this roughly circular patch of land is oddly clear of even the smallest sapling. Instead, vines, grasses, and flowers cover the ground here. You hear the raucus chatter of crows, and the swish of the leaves as the breeze dips into the clearing from above.", "dark":"The small clearing is dim but clear to your night-adjusted eyes, with moonlight streaming down from the break in the canopy. The rustling leaves and the sound of a few crickets are the only things you hear here."},
            },
            "Plains-X":{"exits":
            {"n":"North-Woods-Entrance", "s":"none", "w":"none", "e":"none"},
            "descriptions":
            {"light":"To the east, south, and west, stretch the open plains. Sunlight streams down on the tall grasses and small bushes that populate the plains. To the north, a grand forest stands, full of great redwoods and a smattering of other conifers and deciduous trees. The undergrowth seems impassibly dense, except for the path leading north from this spot.", "dark":"Around you to the east, south, and west, the moon and stars shine down on the open, windy plains, lighting the grasses and small shrubs in a grayscale symphony of motion. The forest ahead is an imposing wall of darkness, and you can just make out the trail leading in to the north."},
            },
        },
        "character":{
            "stats":{"strength":10, "stamina":10, "dexterity":10, "wisdom":10, "intelligence":10, "charisma":10},
            "wearing":{"rightHand":"empty", "leftHand":"empty", "head":"empty", "eyes":"empty", "torso":"empty", "legs":"empty", "feet":"empty"},
            "hp":50,
            "inventory":[],
        },
    }