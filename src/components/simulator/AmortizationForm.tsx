import Form from "antd/lib/form";
import Card from "antd/lib/card";
import Input from "antd/lib/input";
import Desking, { Quota } from "../../utils/Desking";
import { FunctionComponent, useState } from "react";

const desking = new Desking();

export type AmortizationFormProps = {
  onAmortizationData: (data: Quota[]) => void;
};

const AmortizationForm: FunctionComponent<AmortizationFormProps> = ({ onAmortizationData }) => {
  const [form] = Form.useForm();
  const [result, setResult] = useState<Quota[]>([]);
  const onChangeValue = (_: any, values: any) => {
    if (values.amount && values.apr && values.term) {
      const res = desking.generateAmortization(
        values.amount,
        values.apr,
        values.term
      );
      setResult(res);
      onAmortizationData(res);
    }
  };
  return (
    <Card title="Simulator">
      <Form layout="vertical" form={form} onValuesChange={onChangeValue}>
        <Form.Item label="Amount" name="amount">
          <Input size="small" />
        </Form.Item>
        <Form.Item label="Apr" name="apr">
          <Input size="small" />
        </Form.Item>
        <Form.Item label="Term" name="term">
          <Input size="small" />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AmortizationForm;
