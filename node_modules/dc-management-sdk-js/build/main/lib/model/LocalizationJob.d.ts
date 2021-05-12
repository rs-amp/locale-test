import { HalResource } from '../hal/models/HalResource';
import { LocalizationRoot } from './LocalizationRoot';
/**
 * Class representing a LocalizationJob.
 * A Localization Job tracks the status of the process that creates locale-variants of content items.
 */
export declare class LocalizationJob extends HalResource {
    /**
     * Status for the Job
     */
    status?: string;
    /**
     * Root content item
     */
    rootContentItem?: LocalizationRoot;
    /**
     * Id of the user responsible for originally creating the job
     */
    createdBy?: string;
    /**
     * Timestamp representing when the job was originally created (ISO 8601 format)
     */
    createdDate?: string;
}
