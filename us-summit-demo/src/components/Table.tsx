import { HotTable, HotColumn } from "@handsontable/react-wrapper";
import { data } from "../constants/data";
import { PredefinedMenuItemKey } from "handsontable/plugins/contextMenu";
import { HyperFormula } from "hyperformula";
import Person from "./renderers/Person";

// Create an external HyperFormula instance
const hyperformulaInstance = HyperFormula.buildEmpty({
  licenseKey: "internal-use-in-handsontable",
});

const tableConfig = {
  height: 430,
  nestedHeaders: [
    [
      { label: "Customer", colspan: 6 },
      { label: "Order", colspan: 4 },
    ],
    [
      "Full name",
      "Job title",
      "Company name",
      "Phone",
      "Active",
      "Country",
      "Name",
      "Storage date",
      "Sell date",
      "Order ID",
    ],
  ],
  contextMenu: [
    "cut",
    "copy",
    "---------",
    "row_above",
    "row_below",
    "remove_row",
    "---------",
    "alignment",
    "make_read_only",
    "clear_column",
  ] as PredefinedMenuItemKey[],
  fixedColumnsStart: 1,
  rowHeaders: true,
  filters: true,
  dropdownMenu: true,
  autoRowSize: false,
  autoColumnSize: false,
  autoWrapCol: true,
  autoWrapRow: true,
  navigableHeaders: true,
  multiColumnSorting: true,
  manualRowMove: true,
  manualColumnMove: true,
  manualRowResize: true,
  manualColumnResize: true,
  bindRowsWithHeaders: true,
  formulas: {
    engine: hyperformulaInstance,
    sheetName: "Sheet1",
  },
};

type Props = {
  themeName: string;
};

const Table = ({ themeName }: Props) => (
  <main className="table-wrapper">
    <div className="table-container">
      <div className={themeName}>
        <HotTable
          data={data}
          {...tableConfig}
          licenseKey="non-commercial-and-evaluation"
        >
          <HotColumn
            data="person.fullName"
            headerClassName="htLeft"
            width={160}
            renderer={Person}
          />
          <HotColumn data="jobTitle" headerClassName="htLeft" width={180} />
          <HotColumn data="companyName" headerClassName="htLeft" width={180} />
          <HotColumn data="phone" headerClassName="htLeft" width={180} />
          <HotColumn
            data="active"
            type="checkbox"
            headerClassName="htLeft"
            className="htCenter"
            width={120}
          />
          <HotColumn
            data="country"
            type="dropdown"
            source={[
              "USA",
              "Canada",
              "UK",
              "Australia",
              "Spain",
              "Japan",
              "Brazil",
              "South Korea",
              "Mexico",
            ]}
            headerClassName="htLeft"
            width={140}
          />
          <HotColumn data="orderName" headerClassName="htLeft" width={220} />
          <HotColumn
            data="orderStorageDate"
            type="date"
            dateFormat="MM/DD/YYYY"
            headerClassName="htLeft"
            width={160}
          />
          <HotColumn
            data="orderSellDate"
            headerClassName="htLeft"
            width={140}
            readonly
          />
          <HotColumn
            data="orderId"
            type="numeric"
            headerClassName="htRight"
            className="htRight"
            width={120}
          />
        </HotTable>
      </div>
    </div>
  </main>
);

export default Table;
