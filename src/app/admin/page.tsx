import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      Página de administração
      {JSON.stringify(session)}
    </div>
  );
};

export default AdminPage;
