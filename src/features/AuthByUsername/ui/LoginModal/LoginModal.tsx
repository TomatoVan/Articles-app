import { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { PageLoader } from '../../../PageLoader';
import { Modal } from '@/shared/ui/deprecated/Modal';

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
