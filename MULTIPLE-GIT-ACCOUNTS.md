# 🔐 Managing Multiple Git Accounts

## Current Configuration

### This Repository (Portfolio_One)

- **Username**: `DEVELOPERNICK21`
- **Email**: `nikhilkubde21@gmail.com`
- **Remote**: `https://github.com/DEVELOPERNICK21/Nick_portfolio.git`

### Your Global Git Config

- **Username**: `nickhind`
- **Email**: `nikhil.kubde@hindavi.in`

## ✅ How It Works

Each repository can have its own Git configuration. This repository is set to use the `DEVELOPERNICK21` account, while your global config uses `nickhind`. This allows you to work with multiple GitHub accounts seamlessly.

## 🔑 Authentication Options

### Option 1: SSH Keys (Recommended for Multiple Accounts)

1. **Generate SSH keys for each account:**

```bash
# For DEVELOPERNICK21 account
ssh-keygen -t ed25519 -C "nikhilkubde21@gmail.com" -f ~/.ssh/id_ed25519_developernick21

# For nickhind account (if you don't have one)
ssh-keygen -t ed25519 -C "nikhil.kubde@hindavi.in" -f ~/.ssh/id_ed25519_nickhind
```

2. **Add SSH keys to GitHub:**

   - Copy public key: `cat ~/.ssh/id_ed25519_developernick21.pub`
   - Go to GitHub → Settings → SSH and GPG keys → New SSH key
   - Paste and save

3. **Configure SSH config file:**

```bash
# Edit ~/.ssh/config
nano ~/.ssh/config
```

Add this configuration:

```
# DEVELOPERNICK21 account
Host github-developernick21
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_developernick21

# nickhind account
Host github-nickhind
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_nickhind
```

4. **Update remote URL to use SSH:**

```bash
cd /Users/admin/development/websites/Portfolio_One
git remote set-url origin git@github-developernick21:DEVELOPERNICK21/Nick_portfolio.git
```

### Option 2: HTTPS with Credential Helper

1. **Use GitHub Personal Access Token:**

```bash
# When prompted for password, use a Personal Access Token
# Generate token: GitHub → Settings → Developer settings → Personal access tokens
```

2. **Store credentials per repository:**

```bash
# This repository will use DEVELOPERNICK21 credentials
git config credential.helper store
```

## 📝 Setting Up New Repositories

### For DEVELOPERNICK21 Account:

```bash
cd /path/to/new/repo
git config user.name "DEVELOPERNICK21"
git config user.email "nikhilkubde21@gmail.com"
git remote add origin https://github.com/DEVELOPERNICK21/repo-name.git
```

### For nickhind Account:

```bash
cd /path/to/new/repo
git config user.name "nickhind"
git config user.email "nikhil.kubde@hindavi.in"
git remote add origin https://github.com/nickhind/repo-name.git
```

## 🔍 Verify Configuration

Check repository-specific config:

```bash
git config --list --local
```

Check global config:

```bash
git config --list --global
```

## 🚀 Ready to Push

Now you can push to GitHub. The repository is configured to use the `DEVELOPERNICK21` account:

```bash
git push --force origin main
```

**Note**: We're using `--force` because we rewrote history to remove the large file. Only do this if you're sure no one else is working on this repository.

## 💡 Tips

1. **Always check before committing:**

   ```bash
   git config user.name
   git config user.email
   ```

2. **Use SSH for better security** - It's more secure and convenient than HTTPS tokens

3. **Keep accounts separate** - Each repository remembers its own config, so you don't need to switch manually

4. **If you need to change account for this repo:**
   ```bash
   git config user.name "OtherAccount"
   git config user.email "other@email.com"
   ```
