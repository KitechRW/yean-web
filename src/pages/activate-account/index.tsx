import Http from 'core/factory/fact.http';
import { useRouter } from 'next/router';
import React from 'react';
import swal from 'sweetalert';

export const getServerSideProps = ({
  query: { activation },
}: any) => {
  if (!activation) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
  return {
    props: {
      token: activation,
    },
  };
};

const ActivateAccount = ({ token }: { token: string }) => {
  const { push } = useRouter();
  const [error, setError] = React.useState<any>(null);
  React.useEffect(() => {
    Http.axios
      .post('/api/auth/confirm', { token })
      .then(response => {
        if (response.data.user?.active) {
          swal(
            'Activated',
            response.data.message ||
              'Account has been activate successfully, now you can login',
            'success',
          ).then(() => {
            push('/login');
          });
        } else {
          setError('something went wrong');
        }
      })
      .catch(error => {
        setError(error.message || 'Something went wrong');
      });
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {error ? (
        <div className="flex flex-col items-center max-w-sm">
          <p className="px-6 py-3 rounded-lg bg-red-500 text-white">
            Something went wrong while activating your account. Please
            check your email and try again or contact admin for more
            support.
          </p>

          <button
            type="button"
            onClick={() => {
              push('/');
            }}
            className="px-6 py-2.5 bg-dark-green text-white rounded-full mt-6"
          >
            Back Home
          </button>
        </div>
      ) : (
        <h1 className="text-2xl md:text-4xl font-black tracking-wide text-brand-green">
          Please wait....
        </h1>
      )}
    </div>
  );
};

export default ActivateAccount;
