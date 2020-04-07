import React from 'react';
import { Link } from 'gatsby'

export default ()=> {
  return (
    <div>
      <Link
        to="/auth"
        state={{
          modal: true
        }}
      >
        Login
      </Link>
    </div>
  )
}