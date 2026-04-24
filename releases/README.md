# Released builds

Installable artifacts for al-Ghirbal.

## Available

| File | Platform | Size | Signed | Install via |
|---|---|---|---|---|
| [`al-ghirbal-v1.1-debug.apk`](al-ghirbal-v1.1-debug.apk) | 🤖 Android | 4.1 MB | Debug keystore | `adb install`, sideload, or Play Store (Internal testing) |

## Install on Android

### Option A — via USB (recommended for workshop)

1. On your phone: **Settings → About phone → tap "Build number" 7×** → unlocks Developer Options.
2. **Settings → Developer Options → Enable USB debugging**.
3. Plug phone into your computer with a real data cable.
4. Approve "Allow USB debugging" prompt on phone.
5. In your terminal:
   ```bash
   adb install al-ghirbal-v1.1-debug.apk
   ```
6. App appears in your launcher as "al-Ghirbal" (or "الغربال" if device locale is Arabic).

### Option B — sideload the APK file directly

1. Copy `al-ghirbal-v1.1-debug.apk` to your phone via Google Drive, AirDrop-to-Android, email, or USB file transfer.
2. On your phone: open the file manager, navigate to the APK, tap it.
3. On first install, Android will prompt "Install unknown apps" — grant permission to your file manager.
4. Confirm install.

### Why "debug" and not "release"?

Debug builds are signed with Android's universal debug keystore — convenient for sideloading but **not accepted by Play Store**. A release build is signed with the developer's own private keystore.

For the release-signed AAB (Play Store upload format):
```bash
./manage.sh → option 7 (create keystore) → option 6 (build signed AAB)
```
Output: `android/app/build/outputs/bundle/release/app-release.aab`.

## Not yet available

| File | Platform | Blocker |
|---|---|---|
| `al-ghirbal-v1.0.ipa` | 📱 iOS / iPhone | Requires full Xcode (~10 GB, Mac App Store) — currently only Command Line Tools installed. See WORKSHOP.html §12. |

## Build provenance

- **Source**: [al-ghirbal](https://github.com/abourdim/al-ghirbal) book repo, commit `618abf2` (header polish + wdiy logo)
- **Wrapped by**: [Capacitor](https://capacitorjs.com) 7.x
- **Package ID**: `org.workshopdiy.alghirbal`
- **Target SDK**: Android 14 (API 34)
- **Min SDK**: inherited from Capacitor default (API 23, Android 6.0+)

## License

See the [LICENSE](../LICENSE) in the parent repo and in the al-ghirbal source book. The APK contains:
- al-ghirbal source (MIT) — by Abdelhak Bourdim
- Capacitor runtime (MIT) — by Ionic Team
- Bundled workshop-diy logo (from abourdim/workshop-logos)
- Arabic content derived from Sheikh Mohammed al-Ghazali's "ليس من الإسلام"
