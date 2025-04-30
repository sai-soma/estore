import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Layout } from "../../../components/Layout"; // Your Layout component
import { StateContext } from "../../../context/StateContext"; // Your context provider

interface StudioLayoutProps {
  children: ReactNode; // Declare that `children` will be passed as React nodes (JSX/Components/HTML elements)
}

export default function StudioLayout({ children }: StudioLayoutProps) {
  return (
    <StateContext>
      {/* Wrap the children inside the Layout component */}
      <Layout>
        <Toaster /> {/* Notifications */}
        <div className="studio-page-content">
          {children} {/* Render the page content here */}
        </div>
      </Layout>
    </StateContext>
  );
}
