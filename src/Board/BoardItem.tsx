import React from "react";
import {
  cls,
  CollapsibleContainer,
  css,
  sUtils,
  colors,
  spacings,
} from "../infra";
import Subitem from "./Subitem";

const BoardItem = ({ item }: { item: Item }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div key={item.id} className={cls.itemCard}>
      <div className={cls.itemCardHeader} onClick={() => setIsOpen(!isOpen)}>
        <img src={getImageSrc(item)} alt="" />
        <span>{item.name}</span>
        {item.type == "playlist" && (
          <span className={cls.itemType}>playlist</span>
        )}
      </div>
      {item.type === "playlist" && (
        <CollapsibleContainer className={cls.subitemsContainer} isOpen={isOpen}>
          {() => (
            <>
              <Subitem
                image="https://i.ytimg.com/vi/0Bvm9yG4cvs/mqdefault.jpg"
                title="Ludovico Einaudi - Una mattina FULL ALBUM"
              />
              <Subitem
                image="https://i.ytimg.com/vi/0Bvm9yG4cvs/mqdefault.jpg"
                title="Ludovico Einaudi - Una mattina FULL ALBUM"
              />
              <Subitem
                image="https://i.ytimg.com/vi/0Bvm9yG4cvs/mqdefault.jpg"
                title="Ludovico Einaudi - Una mattina FULL ALBUM"
              />
              <Subitem
                image="https://i.ytimg.com/vi/0Bvm9yG4cvs/mqdefault.jpg"
                title="Ludovico Einaudi - Una mattina FULL ALBUM"
              />
            </>
          )}
        </CollapsibleContainer>
      )}
    </div>
  );
};

css.class(cls.itemCard, {
  position: "relative",
  marginTop: spacings.columnGap,
  backgroundColor: "#f8f9fa",
  borderRadius: 5,
  overflow: "hidden",
  transition: "all 100ms",
  boxShadow: "0 1px 1px rgb(9 30 66 / 25%)",
  userSelect: "none",
});

css.hover(cls.itemCard, {
  boxShadow: "1px 2px 5px 0 rgb(0 0 0 / 53%)",
});

css.active(cls.itemCard, {
  boxShadow: "1px 2px 3px hsla(0, 0%, 0%, 0.2)",
});

css.lastOfType(cls.itemCard, {
  marginBottom: spacings.columnGap,
});

css.parentChild(cls.boardDark, cls.itemCard, {
  backgroundColor: colors.dark.itemBackground,
});

css.class(cls.itemCardHeader, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  height: 48,
});

css.hover(cls.itemCardHeader, {
  backgroundColor: colors.light.itemBackgroundHover,
});

css.selector(`.${cls.boardDark} .${cls.itemCardHeader}:hover`, {
  backgroundColor: colors.dark.itemBackgroundHover,
});

css.parentChildTag(cls.itemCardHeader, "img", {
  width: 68,
  height: 48,
  objectFit: "cover",
  display: "block",
});

css.parentChildTag(cls.itemCardHeader, "span", {
  lineHeight: 16,
  fontSize: 14,
  ...sUtils.paddingHorizontal(6),
});

css.class(cls.itemType, {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: 68,
  padding: 1,
  fontSize: 1,
  color: "white",
  fontWeight: "bold",
  backgroundColor: colors.itemTypeBackground,
  textAlign: "center",
});

css.class(cls.subitemsContainer, {
  overflow: "hidden",
});

export default BoardItem;

export const getImageSrc = (item: Item): string | undefined => {
  if (item.type === "playlist") return item.image;
  else return `https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg`;
};
