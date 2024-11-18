import { HotRendererProps } from "@handsontable/react-wrapper";
import { addClassWhenNeeded } from "../../helpers";

const Person = (props: HotRendererProps) => {
  const { instance, row, value } = props;
  const avatarSrc = instance.getDataAtRowProp(row, "person").avatarSrc;

  addClassWhenNeeded(props);

  return (
    <div className="user-avatar">
      <img src={avatarSrc} alt={value} />
      <span>{value}</span>
    </div>
  );
};

export default Person;
