import React, { useEffect, useState } from 'react'
import { User } from '../services/user-client';
import userService from '../services/user-client';

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const { request, cancel } = userService.getAll<User>()
      request.then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setErrors(err.message);
        setLoading(false);
      });
      return cancel()
  }, []);

  return { users, loading, errors, setErrors, setUsers}
}

export default useUsers