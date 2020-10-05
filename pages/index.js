import React from "react";
import { EmptyState, Layout, Page } from "@shopify/polaris";

export default function Index() {
  return (
    <Page>
      <Layout>
        <EmptyState
          heading="Manage your inventory transfers"
          action={{ content: "Select Products" }}
          image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
        >
          <p>Select Products to add custom scripts for</p>
        </EmptyState>
      </Layout>
    </Page>
  );
}
