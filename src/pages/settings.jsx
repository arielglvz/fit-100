import { UserImgPlaceholder } from "@/components/assets/images"
import Avatar from "@/components/ui/Avatar"
import { Button } from "@/components/ui/Button"
import { ToggleSwitch } from "@/components/ui/ToggleSwitch"
import { logout } from "@/features/auth/services/authService"
import { SettingsSection } from "@/features/settings/components/SettingsSection"
import { SetttingsItem } from "@/features/settings/components/SetttingsItem"
import { settingsConfig } from "@/features/settings/lib/settingsConfig"
import { LogOut, Moon } from "lucide-react"

const Settings = () => {
  return (
    <div className="space-y-6 p-4">
      <div className="space-y-3">
        <Avatar url={UserImgPlaceholder} className="mx-auto" />
        <div className="text-center">
          <p className="font-semibold text-h3 text-foreground">Ariel Galvez</p>
          <p className="text-body text-semibold">Current Streak: 12 Days</p>
        </div>
      </div>
      <Button className="w-full rounded-md">Edit Profile</Button>
      <div className="space-y-2">
        <SettingsSection label="Preference">
          <div className="w-full py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Moon size={18} className="text-muted" />
              <span className="text-sm font-semibold text-label text-nowrap">
                Dark Mode
              </span>
            </div>
            <ToggleSwitch />
          </div>
        </SettingsSection>
        {settingsConfig.map((setting) => {
          const { items } = setting
          return (
            <SettingsSection key={setting.title} label={setting.title}>
              {items.map((item, index) => {
                return (
                  <SetttingsItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    type={item.type}
                    linkIcon={item.linkIcon}
                    className={
                      index !== items.length - 1 && "border-b border-b-muted"
                    }
                  />
                )
              })}
            </SettingsSection>
          )
        })}
      </div>
      <Button
        className="w-full bg-surface font-bold text-error border border-border-light rounded-md gap-2"
        onClick={() => {
          logout()
        }}
      >
        <LogOut size={18} />
        Logout
      </Button>
    </div>
  )
}

export default Settings
