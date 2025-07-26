# SSH & Remote Management Setup Guide

This guide explains how to set up SSH access, remote management, and port forwarding for deploying and managing your website.

---

## 1. Setting Up SSH Access

### a. Generate SSH Keys (if you don't have them)

On your local machine, open a terminal and run:
```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```
- Press Enter to accept the default file location.
- Set a passphrase if you want extra security.

Your public key will be at `~/.ssh/id_ed25519.pub`.

### b. Copy Your Public Key to the Server

Replace `user` and `server_ip` with your actual username and server IP address:
```sh
ssh-copy-id user@server_ip
```
If `ssh-copy-id` is not available, you can manually copy the key:
```sh
cat ~/.ssh/id_ed25519.pub
```
Copy the output, then SSH into your server and append it to `~/.ssh/authorized_keys`:
```sh
echo "paste_copied_key_here" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### c. Test SSH Login

```sh
ssh user@server_ip
```
You should log in without a password prompt (unless you set a passphrase).

---

## 2. Remote Management

Once SSH is set up, you can:

- **Upload files:**  
  ```sh
  scp -r ./local_folder user@server_ip:/path/on/server
  ```
- **Edit files remotely:**  
  Use `ssh` with editors like `vim`, `nano`, or `emacs`:
  ```sh
  ssh user@server_ip
  nano /path/to/file
  ```
- **Run commands/scripts:**  
  ```sh
  ssh user@server_ip 'bash /path/to/script.sh'
  ```

---

## 3. Port Forwarding

Port forwarding allows you to access services running on the remote server (like your website's dev server) from your local machine.

### a. Local Port Forwarding

To forward a remote port (e.g., 5173 for Vite) to your local machine:
```sh
ssh -L 5173:localhost:5173 user@server_ip
```
- Now, visiting `http://localhost:5173` on your local browser will connect to the remote server's port 5173.

### b. Remote Port Forwarding

To expose a local service to the remote server:
```sh
ssh -R 9000:localhost:9000 user@server_ip
```
- Now, the remote server can access your local machine's port 9000.

### c. Dynamic Port Forwarding (SOCKS Proxy)

For advanced use (e.g., browsing the web via the server):
```sh
ssh -D 1080 user@server_ip
```
- Set your browser's SOCKS5 proxy to `localhost:1080`.

---

## 4. Tips

- **Automate with SSH config:**  
  Edit `~/.ssh/config` for easier connections:
  ```
  Host myserver
      HostName server_ip
      User user
      IdentityFile ~/.ssh/id_ed25519
  ```
  Then connect with:
  ```sh
  ssh myserver
  ```

- **Security:**  
  - Disable password authentication on the server for better security.
  - Use firewalls (e.g., `ufw`) to restrict access.

---

## 5. Example: Deploying the Website

1. **Build your site locally:**
   ```sh
   npm run build
   ```
2. **Upload the build folder:**
   ```sh
   scp -r dist/ user@server_ip:/var/www/mywebsite
   ```
3. **SSH into the server and serve the site:**
   ```sh
   ssh user@server_ip
   cd /var/www/mywebsite
   npx serve .
   ```
   Or configure Nginx/Apache for production.

---

**For more details, see your hosting provider's documentation or ask your system administrator.** 