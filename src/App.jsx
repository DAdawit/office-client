import "./App.css";
import { Routes, Route } from "react-router-dom";
import ForgetPasswordPage from "./pages/auth/ForgetPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import LoginPage from "./pages/auth/LoginPage";
import SocketComponent from "./components/Socket/SocketComponent";
import Dashboard from "./pages/admin/Dashboard";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import DashboardMainLayout from "./components/common/Dashboard/DashboardMainLayout";
import IncommingLetter from "./pages/incommingLetter/IncommingLetter";
import DashboardLayout from "./components/auth/DashboardLayout";
import IncommingLetterDetail from "./components/IncommingLetter/IncommingLetterDetail";
// import EditOrganizationPage from "@/pages/organization/edit-organization-page";
import ForwardHistory from "./components/IncommingLetter/ForwardHistory";
import RepliedHistory from "./components/IncommingLetter/RepliedHistory";
import RecordOffice from "./pages/recordOffice/RecordOffice";
import Accusations from "./pages/accusations/Accusations";
import AccusationDetail from "./components/Accusations/AccusationDetail";
import RegisterIncommingLetter from "./components/IncommingLetter/RegisterIncommingLetter";
import EditIncommingLetter from "./components/IncommingLetter/EditIncommingLetter";
import RegisterAccusation from "./components/Accusations/RegisterAccusation";
import AddRecordOffice from "./components/RecordOffice/AddRecordOffice";
import EditRecordOffice from "./components/RecordOffice/EditRecordOffice";
import RecordOfficeDetail from "./components/RecordOffice/RecordOfficeDetail";
import CaseDetail from "./components/Case/CaseDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forget-password" element={<ForgetPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/design-components" element={<DashboardMainLayout />} />
      <Route path="/incomming-letter" element={<IncommingLetter />} />
      <Route path="/dashboard" element={<DashboardLayout />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Index route - renders when path exactly matches "/" */}
        <Route index element={<Dashboard />} />

        <Route path="incoming-letter" element={<IncommingLetter />} />
        <Route path="incoming-letter/:id" element={<IncommingLetterDetail />} />
        <Route
          path="incoming-letter/register"
          element={<RegisterIncommingLetter />}
        />
        <Route
          path="incoming-letter/edit/:id"
          element={<EditIncommingLetter />}
        />
        <Route path="forwardhistory" element={<ForwardHistory />} />
        <Route path="repliedHistory" element={<RepliedHistory />} />
        <Route path="documents" element={<IncommingLetter />} />
        <Route path="users" element={<IncommingLetter />} />
        <Route path="record-offices" element={<RecordOffice />} />
        <Route path="record-offices/add" element={<AddRecordOffice />} />
        <Route path="record-offices/:id" element={<RecordOfficeDetail />} />
        <Route path="record-offices/edit/:id" element={<EditRecordOffice />} />
        <Route path="accusations" element={<Accusations />} />
        <Route path="accusations/register" element={<RegisterAccusation />} />
        <Route path="accusations/:id" element={<AccusationDetail />} />
        <Route path="caseDetail" element={<CaseDetail />} />
        {/* <Route path="edit-organization/:id" element={<EditOrganizationPage />} /> */}
      </Route>

      {/* Protected Routes */}
      {/* <Route element={<ProtectedRoute allowedRoles={["admin", "user"]} />}>
        <Route path="/dashboard" element={<DashboardMainLayout />} />
      </Route> */}
      {/* Not Found */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
