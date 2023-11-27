import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal lazy onClose={onClose} isOpen={isOpen}>
        <Suspense fallback={<PageLoader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
