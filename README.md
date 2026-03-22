# Authenticator Splitter

Split authenticator app export QR codes into individual codes for 1Password and other authenticator apps.

Works with Google Authenticator and other apps that use the `otpauth-migration://` format.

## Features

- Drag-and-drop or file picker for image uploads
- Supports HEIC/HEIF screenshots from iOS
- Handles multiple QR codes across multiple images
- Search and filter accounts
- Privacy toggle to blur account names
- Download individual QR codes as PNG
- Copy `otpauth://` URIs to clipboard

## Privacy

Everything runs in your browser. Your secrets never leave your device. No server-side processing, no analytics, no tracking.

## Development

```bash
npm install
npm start
```

Open [http://localhost:3847](http://localhost:3847).

## Deployment

Configured for Netlify. Just connect the repo and deploy, no build step needed.

## License

MIT
