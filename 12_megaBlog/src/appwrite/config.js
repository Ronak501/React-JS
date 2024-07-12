import conf from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{

    client = new Client();
    Databases;
    bucket

    constructor() {
        this.client
           .setEndpoint(conf.appwriteUrl)
           .setProject(conf.appwriteProjectId);
        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createpost({title, slug, content,featureImage,status,userId}){
        try {
            return await this.Databases.createDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite Service : createpost:: Error",error);
        }
    }

    async updatepost(slug, {title, content, featureImage, status}){
        try {
            return await this.Databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite Service : updatepost:: Error",error);
        }
    }

    async deletepost(slug){
       try {
            await this.Databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service : deletepost:: Error",error);
            return false;
       } 
    }

    async getpost(slug){
        try {
            return await this.Databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Service : getpost:: Error",error);
            return false;
        }
    }

    async getposts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.Databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service : getposts:: Error",error);
            return false;
        }
    }

    async uploadfile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite Service : uploadfile:: Error",error);
            return false;
        }
    }

    async deletefile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId  
            )
        } catch (error) {
            console.log("Appwrite Service : deletefile:: Error",error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service;