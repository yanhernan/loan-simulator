import { Table } from "antd";
import Title from "antd/lib/typography/Title";
import { FunctionComponent } from "react";
import { Quota } from "../../utils/Desking";

export type AmortizationTbProps = {
  datasource: Quota[];
};

const AmortizationTb: FunctionComponent<AmortizationTbProps> = ({
  datasource,
}) => {
    const formatNumber = (text: number, record: Quota, index: number) => {
        return Intl.NumberFormat('us', { maximumFractionDigits: 2, style: 'currency', currency: 'USD' }).format(text)
    }
    return (
  <div>
    <Title >Amortization Table</Title>
    <hr />
    <Table size="small" dataSource={datasource}>
      <Table.Column dataIndex="couta" title="#" />
      <Table.Column dataIndex="date" title="Date" />
      <Table.Column dataIndex="mount" title="Amount" render={formatNumber} />
      <Table.Column dataIndex="interest" title="Interest" render={formatNumber} />
      <Table.Column dataIndex="payoff" title="PayOff" render={formatNumber} />
      <Table.Column dataIndex="total" title="Total" render={formatNumber} />
    </Table>
  </div>
)};

export default AmortizationTb;
