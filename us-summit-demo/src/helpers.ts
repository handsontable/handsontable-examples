import Handsontable from "handsontable";
import { HotRendererProps } from "@handsontable/react-wrapper";

export const addClassWhenNeeded = (props: HotRendererProps) => {
  const { instance, row, col, cellProperties } = props;
  const className = cellProperties?.className;
  const TD = instance.getCell(row, col, true);

  if (className !== void 0 && TD) {
    Handsontable.dom.addClass(TD, className);
  }
};
