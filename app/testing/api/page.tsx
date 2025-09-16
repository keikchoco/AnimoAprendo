"use client";

import { useState } from "react";

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
    id: "user_29wBMCtzATuFJut8jO2VNTVekS4",
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

const updateUserData = {
  data: {
    birthday: "",
    created_at: 1654012591514,
    email_addresses: [
      {
        email_address: "example@example.org",
        id: "idn_29w83yL7CwVlJXylYLxcslromF1",
        linked_to: [],
        object: "email_address",
        reserved: true,
        verification: {
          attempts: null,
          expire_at: null,
          status: "verified",
          strategy: "admin",
        },
      },
    ],
    external_accounts: [],
    external_id: null,
    first_name: "Example",
    gender: "",
    id: "user_29wBMCtzATuFJut8jO2VNTVekS4",
    image_url: "https://img.clerk.com/xxxxxx",
    last_name: null,
    last_sign_in_at: null,
    object: "user",
    password_enabled: true,
    phone_numbers: [],
    primary_email_address_id: "idn_29w83yL7CwVlJXylYLxcslromF1",
    primary_phone_number_id: null,
    primary_web3_wallet_id: null,
    private_metadata: {},
    profile_image_url: "https://www.gravatar.com/avatar?d=mp",
    public_metadata: {},
    two_factor_enabled: false,
    unsafe_metadata: {},
    updated_at: 1654012824306,
    username: null,
    web3_wallets: [],
  },
  event_attributes: {
    http_request: {
      client_ip: "0.0.0.0",
      user_agent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    },
  },
  object: "event",
  timestamp: 1654012824306,
  type: "user.updated",
};

const deleteUserData = {
  data: {
    deleted: true,
    id: "user_29wBMCtzATuFJut8jO2VNTVekS4",
    object: "user",
  },
  event_attributes: {
    http_request: {
      client_ip: "0.0.0.0",
      user_agent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    },
  },
  object: "event",
  timestamp: 1661861640000,
  type: "user.deleted",
};

export default function ClerkCreate() {
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [responseData, setResponseData] = useState<any>(null);

  const handleCreate = async () => {
    const response = await fetch("/api/clerkcreate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      setStatusCode(response.status);
      setResponseData(data);
    } else {
      const data = await response.json();
      setStatusCode(response.status);
      setResponseData(data);
    }
  };

  const handleUpdate = async () => {
    const response = await fetch("/api/clerkupdate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUserData),
    });

    if (response.ok) {
      const data = await response.json();
      setStatusCode(response.status);
      setResponseData(data);
    } else {
      const data = await response.json();
      setStatusCode(response.status);
      setResponseData(data);
    }
  };

  const handleDelete = async () => {
    const response = await fetch("/api/clerkdelete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteUserData),
    });

    if (response.ok) {
      const data = await response.json();
      setStatusCode(response.status);
      setResponseData(data);
    } else {
      const data = await response.json();
      setStatusCode(response.status);
      setResponseData(data);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-fit">
      <div className="w-full flex flex-col h-fit px-8 py-4 bg-white gap-4 rounded-lg">
        <h2 className="font-bold">Actions:</h2>
        <div className="flex flex-row gap-4 font-semibold">
          <button
            onClick={handleCreate}
            className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Create User
          </button>
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Update User
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Delete User
          </button>
        </div>
      </div>

      {statusCode && (
        <div className="w-full h-fit p-4 bg-white/95 text-black/98 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Response Status: {statusCode}
          </h2>
          <h2 className="text-lg font-semibold mb-2">Response Data:</h2>
          <pre className="whitespace-pre-wrap bg-black/95 p-2 rounded-lg text-white/98 max-h-96 overflow-auto">
            <code>{JSON.stringify(responseData, null, 2)}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
