import Col from "antd/lib/col";
import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import { FunctionComponent, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import AmortizationForm from "../components/simulator/AmortizationForm";
import AmortizationTb from "../components/simulator/AmortizationTb";
import { Quota } from "../utils/Desking";
import "./SimulatorPage.css";

export const SimulatorPage: FunctionComponent<
  RouteComponentProps<any>
> = () => {
  const [quotas, setQuotas] = useState<Quota[]>([]);
  const listenerAmortizationData = (data: Quota[]) => {
    setQuotas(data);
  };
  return (
    <Layout.Content className="content-simulator">
      <Row gutter={24}>
        <Col flex={1}>
          <AmortizationForm onAmortizationData={listenerAmortizationData} />
        </Col>
        <Col flex={4}>
          <AmortizationTb datasource={quotas} />
        </Col>
      </Row>
    </Layout.Content>
  );
};
