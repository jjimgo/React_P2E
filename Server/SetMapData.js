import { MapDB } from "./models.js";

export const SetMapData = async () => {
  const ch = await MapDB.findOne({ reload: true });
  if (ch === null) {
    const SetData = await new MapDB({
      reload: true,
      owner: [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
      ],
      MapName: [
        "Ardenweald",
        "CaliforNia",
        "CrestFall",
        "IceCrown",
        "Maldraxxus",
        "Nazjatar",
        "NetherLands",
        "NewMexico",
        "OreGon",
        "OutLands",
        "PennsylVania",
        "Revendreth",
        "ShadowLands",
        "SnowBlossom",
        "WashingTon",
      ],
      topography: [
        "Mountain",
        "liver",
        "liver",
        "Mountain",
        "Mountain",
        "liver",
        "liver",
        "liver",
        "Mountain",
        "liver",
        "liver",
        "liver",
        "liver",
        "Mountain",
        "Mountain",
      ],
      GiveToken: [
        "5",
        "3",
        "3",
        "5",
        "5",
        "3",
        "3",
        "3",
        "5",
        "3",
        "3",
        "3",
        "3",
        "5",
        "5",
      ],
      src: [
        "./img/Map/Ardenweald.png",
        "./img/Map/CaliforNia.png",
        "./img/Map/CrestFall.png",
        "./img/Map/IceCrown.png",
        "./img/Map/Maldraxxus.png",
        "./img/Map/Nazjatar.png",
        "./img/Map/NetherLands.png",
        "./img/Map/NewMexico.png",
        "./img/Map/OreGon.png",
        "./img/Map/OutLands.png",
        "./img/Map/PennsylVania.png",
        "./img/Map/Revendreth.png",
        "./img/Map/ShadowLands.png",
        "./img/Map/SnowBlossom.png",
        "./img/Map/WashingTon.png",
      ],
    });

    SetData.save();
    console.log("MapData 초기화 완료!");
  } else {
    console.log("기존 데이터 존재!");
  }
};
