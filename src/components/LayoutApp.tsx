import { FunctionComponent } from "react";
import { Layout } from "antd";

export const LayoutApp: FunctionComponent = ({ children }) => (
  <Layout>
    <Layout.Header></Layout.Header>
    <Layout.Content>{children}</Layout.Content>
  </Layout>
);
