'use client'
const userData = {
  data: {
    backup_code_enabled: false,
    banned: false,
    create_organization_enabled: true,
    create_organizations_limit: null,
    created_at: 1716883200000,
    delete_self_enabled: true,
    email_addresses: [],
    enterprise_accounts: [],
    external_accounts: [],
    external_id: null,
    first_name: "John",
    has_image: true,
    id: "user_2g7np7Hrk0SN6kj5EDMLDaKNL0S",
    image_url: "https://img.clerk.com/xxxxxx",
    last_active_at: 1716883200000,
    last_name: "Doe",
    last_sign_in_at: 1716883200000,
    legal_accepted_at: 1716883200000,
    locked: false,
    lockout_expires_in_seconds: null,
    mfa_disabled_at: null,
    mfa_enabled_at: null,
    object: "user",
    passkeys: [],
    password_enabled: true,
    phone_numbers: [],
    primary_email_address_id: "idn_2g7np7Hrk0SN6kj5EDMLDaKNL0S",
    primary_phone_number_id: null,
    primary_web3_wallet_id: null,
    private_metadata: null,
    profile_image_url: "https://img.clerk.com/xxxxxx",
    public_metadata: {},
    saml_accounts: [],
    totp_enabled: false,
    two_factor_enabled: false,
    unsafe_metadata: {},
    updated_at: 1716883200000,
    username: null,
    verification_attempts_remaining: null,
    web3_wallets: [],
  },
  event_attributes: {
    http_request: {
      client_ip: "192.168.1.100",
      user_agent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    },
  },
  instance_id: "ins_2g7np7Hrk0SN6kj5EDMLDaKNL0S",
  object: "event",
  timestamp: 1716883200,
  type: "user.created",
};

export default function ClerkCreate() {
  const handleCreate = async () => {
    const response = await fetch("/api/clerkcreate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      // Handle successful user creation
    } else {
      // Handle error
    }
  };

  return (
    <div>
      <button onClick={handleCreate}>Create User</button>
    </div>
  );
}
