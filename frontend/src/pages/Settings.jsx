import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  User,
  Shield,
  Bell,
  Palette,
  Save,
  Camera,
  Eye,
  EyeOff,
  ChevronRight,
  Globe,
  Clock,
  Mail,
  Smartphone,
  Lock,
  KeyRound,
  LogOut,
  Trash2,
} from "lucide-react";

const ToggleSwitch = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
      enabled
        ? "bg-[#6C5CE7] shadow-md shadow-[#6C5CE7]/30"
        : "bg-gray-200"
    }`}
  >
    <div
      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-300 ${
        enabled ? "left-[26px]" : "left-0.5"
      }`}
    />
  </button>
);

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="p-2.5 bg-indigo-50 rounded-xl">
      <Icon size={20} className="text-[#6C5CE7]" strokeWidth={2.5} />
    </div>
    <div>
      <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-sm text-gray-400 font-semibold mt-0.5">{subtitle}</p>
      )}
    </div>
  </div>
);

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [profile, setProfile] = useState({
    fullName: "Abdul Haque",
    email: "abdul@escrowflow.com",
    role: "Freelancer",
    bio: "Full-stack developer specializing in React, Node.js, and cloud architecture.",
    phone: "+91 9876543210",
    location: "India",
  });

  const [notifications, setNotifications] = useState({
    emailPayments: true,
    emailProjects: true,
    emailDisputes: false,
    pushPayments: true,
    pushProjects: false,
    pushDisputes: true,
  });

  const [preferences, setPreferences] = useState({
    theme: "light",
    language: "English",
    timezone: "Asia/Kolkata (IST)",
  });

  const [security, setSecurity] = useState({
    twoFactor: false,
    currentPassword: "",
    newPassword: "",
  });

  const tabs = [
    { label: "Profile", icon: User },
    { label: "Security", icon: Shield },
    { label: "Notifications", icon: Bell },
    { label: "Preferences", icon: Palette },
  ];

  const showToast = (message) => {
    toast.success(message, {
      duration: 3000,
      style: {
        borderRadius: "16px",
        background: "#1F2937",
        color: "#fff",
        padding: "16px 24px",
        fontSize: "15px",
        fontWeight: "700",
      },
      iconTheme: { primary: "#6C5CE7", secondary: "#fff" },
    });
  };

  const handleSaveProfile = () => showToast("Profile updated successfully!");
  const handleSaveSecurity = () => showToast("Security settings saved!");
  const handleSaveNotifications = () => showToast("Notification preferences saved!");
  const handleSavePreferences = () => showToast("Preferences updated!");

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-24 animate-in fade-in duration-700">
      <Toaster position="top-right" />

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C5CE7] opacity-[0.02] rounded-full -mr-32 -mt-32" />
        <div className="relative z-10">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Settings</h1>
          <p className="text-gray-500 font-bold mt-1.5 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#6C5CE7] rounded-full animate-pulse" />
            Manage your account preferences and configurations.
          </p>
        </div>
      </div>

      {/* TABS + CONTENT */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* SIDEBAR TABS */}
        <div className="lg:w-[260px] shrink-0">
          <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-4 space-y-1.5 sticky top-24">
            {tabs.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setActiveTab(label)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-bold transition-all duration-200 ${
                  activeTab === label
                    ? "bg-[#6C5CE7] text-white shadow-md shadow-[#6C5CE7]/20"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon size={18} strokeWidth={activeTab === label ? 2.5 : 2} />
                {label}
                <ChevronRight
                  size={16}
                  className={`ml-auto transition-transform ${
                    activeTab === label ? "translate-x-0 text-white/70" : "text-gray-300"
                  }`}
                />
              </button>
            ))}

            {/* Danger Zone */}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <button
                onClick={() => showToast("Logged out successfully!")}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-bold text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all"
              >
                <LogOut size={18} strokeWidth={2} />
                Log Out
              </button>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 min-w-0">
          {/* PROFILE TAB */}
          {activeTab === "Profile" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Avatar Section */}
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-8">
                <SectionHeader icon={User} title="Profile Information" subtitle="Update your personal details" />
                <div className="flex flex-col sm:flex-row items-start gap-8">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#6C5CE7] to-[#8B7CF7] flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-[#6C5CE7]/20">
                      {profile.fullName.charAt(0)}
                    </div>
                    <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm hover:bg-gray-50 transition-all group-hover:scale-110">
                      <Camera size={14} className="text-gray-600" />
                    </button>
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-extrabold text-gray-900">{profile.fullName}</h3>
                    <p className="text-sm text-gray-500 font-semibold">{profile.email}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-indigo-50 text-[#6C5CE7] text-xs font-bold rounded-full border border-indigo-100">
                      {profile.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      value={profile.fullName}
                      onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F9FC] border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/20 focus:border-[#6C5CE7] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F9FC] border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/20 focus:border-[#6C5CE7] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone</label>
                    <input
                      type="text"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F9FC] border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/20 focus:border-[#6C5CE7] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Location</label>
                    <input
                      type="text"
                      value={profile.location}
                      onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F9FC] border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/20 focus:border-[#6C5CE7] transition-all"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Bio</label>
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-[#F8F9FC] border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/20 focus:border-[#6C5CE7] transition-all resize-none"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleSaveProfile}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6C5CE7] text-white font-bold rounded-xl shadow-lg shadow-[#6C5CE7]/20 hover:shadow-xl hover:shadow-[#6C5CE7]/30 transition-all active:scale-95"
                  >
                    <Save size={18} strokeWidth={2.5} />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SECURITY TAB */}
          {activeTab === "Security" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Change Password */}
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-8">
                <SectionHeader icon={KeyRound} title="Change Password" subtitle="Update your account password" />
                <div className="space-y-5 max-w-lg">
                  <div className="relative">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Current Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={security.currentPassword}
                        onChange={(e) => setSecurity({ ...security, currentPassword: e.target.value })}
                        placeholder="Enter current password"
                        className="w-full px-4 py-3 pr-12 bg-[#F8F9FC] border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/20 focus:border-[#6C5CE7] transition-all"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">New Password</label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        value={security.newPassword}
                        onChange={(e) => setSecurity({ ...security, newPassword: e.target.value })}
                        placeholder="Enter new password"
                        className="w-full px-4 py-3 pr-12 bg-[#F8F9FC] border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/20 focus:border-[#6C5CE7] transition-all"
                      />
                      <button
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleSaveSecurity}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6C5CE7] text-white font-bold rounded-xl shadow-lg shadow-[#6C5CE7]/20 hover:shadow-xl hover:shadow-[#6C5CE7]/30 transition-all active:scale-95"
                  >
                    <Lock size={18} strokeWidth={2.5} />
                    Update Password
                  </button>
                </div>
              </div>

              {/* Two-Factor */}
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-8">
                <SectionHeader icon={Shield} title="Two-Factor Authentication" subtitle="Add an extra layer of security" />
                <div className="flex items-center justify-between p-5 bg-[#F8F9FC] rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${security.twoFactor ? "bg-emerald-50" : "bg-gray-100"}`}>
                      <Shield size={22} className={security.twoFactor ? "text-emerald-600" : "text-gray-400"} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">
                        {security.twoFactor ? "2FA is enabled" : "2FA is disabled"}
                      </p>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">
                        {security.twoFactor
                          ? "Your account has extra protection"
                          : "Enable for enhanced account security"}
                      </p>
                    </div>
                  </div>
                  <ToggleSwitch
                    enabled={security.twoFactor}
                    onToggle={() => {
                      setSecurity({ ...security, twoFactor: !security.twoFactor });
                      showToast(security.twoFactor ? "2FA disabled" : "2FA enabled successfully!");
                    }}
                  />
                </div>
              </div>

              {/* Danger Zone */}
              <div className="bg-white rounded-[24px] border border-red-100 shadow-sm p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2.5 bg-red-50 rounded-xl">
                    <Trash2 size={20} className="text-red-500" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-red-600 tracking-tight">Danger Zone</h2>
                    <p className="text-sm text-gray-400 font-semibold mt-0.5">Irreversible actions</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 bg-red-50/50 rounded-2xl border border-red-100 gap-4">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Delete Account</p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <button
                    onClick={() => showToast("Account deletion is disabled in demo mode")}
                    className="px-6 py-2.5 bg-white border border-red-200 text-red-600 font-bold text-sm rounded-xl hover:bg-red-50 transition-all active:scale-95 shrink-0"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === "Notifications" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Email Notifications */}
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-8">
                <SectionHeader icon={Mail} title="Email Notifications" subtitle="Control what emails you receive" />
                <div className="space-y-4">
                  {[
                    { key: "emailPayments", label: "Payment Updates", desc: "Get notified about escrow deposits and releases" },
                    { key: "emailProjects", label: "Project Activity", desc: "Updates on project milestones and submissions" },
                    { key: "emailDisputes", label: "Dispute Alerts", desc: "Notifications about dispute status changes" },
                  ].map(({ key, label, desc }) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-[#F8F9FC] rounded-2xl border border-gray-100 hover:border-gray-200 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
                          <Mail size={18} className="text-gray-400" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{label}</p>
                          <p className="text-xs text-gray-500 font-medium mt-0.5">{desc}</p>
                        </div>
                      </div>
                      <ToggleSwitch
                        enabled={notifications[key]}
                        onToggle={() => setNotifications({ ...notifications, [key]: !notifications[key] })}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Push Notifications */}
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-8">
                <SectionHeader icon={Smartphone} title="Push Notifications" subtitle="Real-time alerts on your device" />
                <div className="space-y-4">
                  {[
                    { key: "pushPayments", label: "Payment Alerts", desc: "Instant push when funds are locked or released" },
                    { key: "pushProjects", label: "Project Alerts", desc: "Push when milestones are completed or due" },
                    { key: "pushDisputes", label: "Dispute Alerts", desc: "Immediate alerts for new disputes" },
                  ].map(({ key, label, desc }) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-[#F8F9FC] rounded-2xl border border-gray-100 hover:border-gray-200 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
                          <Smartphone size={18} className="text-gray-400" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{label}</p>
                          <p className="text-xs text-gray-500 font-medium mt-0.5">{desc}</p>
                        </div>
                      </div>
                      <ToggleSwitch
                        enabled={notifications[key]}
                        onToggle={() => setNotifications({ ...notifications, [key]: !notifications[key] })}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleSaveNotifications}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6C5CE7] text-white font-bold rounded-xl shadow-lg shadow-[#6C5CE7]/20 hover:shadow-xl hover:shadow-[#6C5CE7]/30 transition-all active:scale-95"
                  >
                    <Save size={18} strokeWidth={2.5} />
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PREFERENCES TAB */}
          {activeTab === "Preferences" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-8">
                <SectionHeader icon={Palette} title="Appearance & Preferences" subtitle="Customize your experience" />
                <div className="space-y-6">
                  {/* Theme */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Theme</label>
                    <div className="flex gap-4">
                      {["light", "dark", "system"].map((theme) => (
                        <button
                          key={theme}
                          onClick={() => setPreferences({ ...preferences, theme })}
                          className={`flex-1 py-4 px-6 rounded-2xl border-2 text-sm font-bold capitalize transition-all ${
                            preferences.theme === theme
                              ? "border-[#6C5CE7] bg-indigo-50 text-[#6C5CE7] shadow-sm"
                              : "border-gray-100 bg-[#F8F9FC] text-gray-500 hover:border-gray-200"
                          }`}
                        >
                          <div className="flex flex-col items-center gap-2">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                preferences.theme === theme
                                  ? "bg-[#6C5CE7] text-white"
                                  : "bg-white border border-gray-200 text-gray-400"
                              }`}
                            >
                              {theme === "light" && "☀️"}
                              {theme === "dark" && "🌙"}
                              {theme === "system" && "💻"}
                            </div>
                            {theme}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Language */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      <span className="flex items-center gap-2">
                        <Globe size={14} /> Language
                      </span>
                    </label>
                    <select
                      value={preferences.language}
                      onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F9FC] border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/20 focus:border-[#6C5CE7] transition-all appearance-none cursor-pointer"
                    >
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Arabic</option>
                    </select>
                  </div>

                  {/* Timezone */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      <span className="flex items-center gap-2">
                        <Clock size={14} /> Timezone
                      </span>
                    </label>
                    <select
                      value={preferences.timezone}
                      onChange={(e) => setPreferences({ ...preferences, timezone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F9FC] border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/20 focus:border-[#6C5CE7] transition-all appearance-none cursor-pointer"
                    >
                      <option>Asia/Kolkata (IST)</option>
                      <option>America/New_York (EST)</option>
                      <option>Europe/London (GMT)</option>
                      <option>Asia/Dubai (GST)</option>
                      <option>Asia/Tokyo (JST)</option>
                      <option>Australia/Sydney (AEST)</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleSavePreferences}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6C5CE7] text-white font-bold rounded-xl shadow-lg shadow-[#6C5CE7]/20 hover:shadow-xl hover:shadow-[#6C5CE7]/30 transition-all active:scale-95"
                  >
                    <Save size={18} strokeWidth={2.5} />
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
